import { Meta, Story } from '@storybook/react';
import React from 'react';

import { createVariant } from '~/lib/storybook-kit';

import { Button, ButtonProps } from './button';

export default {
  title: 'Examples/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} />
  </div>
);

export const Primary = createVariant(Template, {
  primary: true,
  label: 'Button',
});

export const Secondary = createVariant(Template, {
  label: 'Button',
});

export const Large = createVariant(Template, {
  size: 'large',
  label: 'Button',
});

export const Small = createVariant(Template, {
  size: 'small',
  label: 'Button',
});
