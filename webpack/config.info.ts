import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import { productionConfig } from './config.prod';

// WebpackBundleAnalyzer config
const infoConfig = merge(productionConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 8888,
      defaultSizes: 'parsed',
      openAnalyzer: false,
      logLevel: 'info',
    }),
  ],
  stats: {
    chunkGroups: true,
    chunks: true,
    chunkModules: false,
    chunkOrigins: true,
    errorDetails: true,
  },
  profile: true,
});

export default infoConfig;
