import { Meta } from '@storybook/react';

import { AppFrame } from '~/core/app-frame';
import { createDecorator, createVariant } from '~/lib/storybook-kit';

import { Hello } from './hello';

export default {
  title: 'Features/Hello',
  parameters: {
    // Show addons panel
    options: {
      showPanel: true,
    },
    // Disable docs tab
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  // Wrap component
  decorators: [createDecorator(AppFrame)],
  // Set controls
  argTypes: {
    greeting: { control: 'text' },
  },
} as Meta;

// Exports of variants
export const primary = createVariant(Hello, {
  greeting: 'Hello World!',
});

export const alternative = createVariant(Hello, {
  greeting: 'Welcome!',
});
