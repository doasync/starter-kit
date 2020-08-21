/* eslint-disable no-restricted-imports */
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { resolvePlugins } from '../webpack/config.common';
import { createRules } from '../webpack/rules';

const customConfig: Configuration = {
  resolve: {
    plugins: resolvePlugins,
  },
  module: {
    rules: createRules({ inlineCssOnly: true, excludeJs: true }),
  },
  performance: {
    hints: false,
  },
};

export const configureWebpack = (config: Configuration): Configuration => {
  // Remove style-loader, file-loader, url-loader
  if (config.module) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.slice(0, -3) ?? [];
  }
  // Merge with custom config
  return merge(config, customConfig);
};
