import DotenvPlugin from 'dotenv-webpack';
import CssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { Plugin } from 'webpack';
import { merge } from 'webpack-merge';

import { commonConfig } from './config.common';
import * as paths from './paths';
import { createRules } from './rules';

// Development plugins
const developmentPlugins: Plugin[] = [
  new DotenvPlugin({
    path: paths.env,
    safe: paths.envRef,
    expand: true,
  }),
  new CssExtractPlugin({
    filename: paths.outputDev.css,
    chunkFilename: paths.outputDev.cssChunks,
  }),
  new webpack.HotModuleReplacementPlugin(),
];

// Development config
export const developmentConfig = merge(commonConfig, {
  mode: 'development',
  entry: {
    main: ['react-hot-loader/patch', paths.entryMain],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    publicPath: '/',
    pathinfo: true,
    filename: paths.outputDev.js,
    chunkFilename: paths.outputDev.jsChunks,
  },
  module: {
    rules: createRules(),
  },
  plugins: developmentPlugins,
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: paths.build,
    publicPath: '/',
    open: true,
    compress: true,
    clientLogLevel: 'error',
    historyApiFallback: {
      disableDotRule: true,
    },
    host: 'localhost',
    port: 8000,
  },
  optimization: {
    concatenateModules: false,
    minimize: false,
    runtimeChunk: true,
  },
  stats: {
    performance: false,
    assets: false,
    entrypoints: false,
  },
});

export default developmentConfig;
