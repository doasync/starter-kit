import { StorybookConfig } from '@storybook/core/types';

import { configureWebpack } from './webpack';

export const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: configureWebpack,
};

export default storybookConfig;
