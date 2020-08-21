import './types';

import HtmlPlugin from 'html-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import webpack, { Plugin, ResolvePlugin } from 'webpack';

import { nodeLibsBrowser } from './node';
import * as paths from './paths';

// Common plugins
export const commonPlugins: Plugin[] = [
  new HtmlPlugin({
    inject: 'body',
    template: paths.indexHtml,
    favicon: paths.favicon,
  }),
];

export const resolvePlugins: ResolvePlugin[] = [
  // Get aliases from tsconfig.json
  new TsconfigPathsPlugin(),
];

// Common config
export const commonConfig: webpack.Configuration = {
  context: paths.root,
  resolve: {
    extensions: paths.extensions,
    plugins: resolvePlugins,
  },
  output: {
    path: paths.build,
  },
  module: {
    rules: [],
    wrappedContextCritical: true,
    strictExportPresence: true,
  },
  plugins: commonPlugins,
  performance: {
    hints: false,
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true, // better gzipped
    namedChunks: true,
  },
  stats: {
    modules: false,
    chunks: false,
    children: false,
    timings: false,
    version: false,
  },
  node: nodeLibsBrowser,
};

export default commonConfig;
