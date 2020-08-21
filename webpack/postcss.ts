import flexBugsFixes from 'postcss-flexbugs-fixes';
import normalize from 'postcss-normalize';
import presetEnv from 'postcss-preset-env';

import { isDevelopment } from './env';

export const postcssConfig = {
  syntax: 'postcss-scss',
  plugins: [
    presetEnv({
      stage: 2,
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace',
      },
    }),
    flexBugsFixes(),
    normalize(),
  ],
  sourceMap: isDevelopment,
};
