import { Meta } from '@storybook/react';

import { AppFrame } from '~/core/app-frame';
import { createDecorator } from '~/lib/storybook-kit';

import { Counter } from './counter';

export default {
  title: 'Features/Counter',
  decorators: [createDecorator(AppFrame)],
} as Meta;

// Exports of variants
export const primary = Counter;
