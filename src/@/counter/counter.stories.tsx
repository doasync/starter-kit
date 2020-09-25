import './init';

import { Meta } from '@storybook/react';
import React from 'react';

import { AppFrame } from '~/core/app-frame';
import { createDecorator } from '~/lib/storybook-kit';

import { Counter } from './counter';

export default {
  title: 'Examples/Counter',
  decorators: [createDecorator(AppFrame)],
} as Meta;

// Exports of variants
export const primary = () => (
  <div style={{ color: '#000' }}>
    <Counter />
  </div>
);
