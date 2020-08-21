import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { isDevelopment } from './env';
import * as paths from './paths';
import { postcssConfig } from './postcss';

export interface Options {
  inlineCssOnly?: boolean;
  excludeJs?: boolean;
}

export const createRules = (options: Options = {}): RuleSetRule[] => {
  const js = {
    test: paths.jsPattern,
    include: paths.source,
    use: ['babel-loader'],
  };

  const css = {
    test: paths.cssPattern,
    use: [
      isDevelopment || options.inlineCssOnly
        ? 'style-loader'
        : {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              hmr: isDevelopment,
            },
          },
      {
        loader: 'css-loader',
        options: {
          sourceMap: isDevelopment,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          ...postcssConfig,
        },
      },
    ],
  };

  const scss = {
    test: paths.scssPattern,
    use: [
      ...css.use,
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true, // required for resolve-url-loader
          sassOptions: {
            sourceMapContents: false,
          },
          webpackImporter: false,
        },
      },
    ],
  };

  const svg = {
    test: paths.svgPattern,
    use: [
      'babel-loader',
      {
        loader: '@svgr/webpack',
        options: {
          ref: true,
          memo: true,
          babel: false,
          prettier: false,
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
        },
      },
    ],
  };

  const assets = {
    test: paths.filePattern,
    use: {
      loader: 'file-loader',
      options: {
        context: paths.source,
        name: isDevelopment ? paths.outputDev.assets : paths.outputProd.assets,
      },
    },
  };

  return options.excludeJs
    ? [css, scss, svg, assets]
    : [js, css, scss, svg, assets];
};
