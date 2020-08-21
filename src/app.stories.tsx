import { Meta } from '@storybook/react';

import { App } from './app';

export default {
  title: 'App',
  // No padding
  layout: 'fullscreen',
  parameters: {
    // Hide addons
    options: {
      showPanel: false,
    },
    // Hide docs tab
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
} as Meta;

export const main = App;
