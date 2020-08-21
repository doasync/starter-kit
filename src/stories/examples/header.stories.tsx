import { Meta, Story } from '@storybook/react';
import React from 'react';

import { createVariant } from '~/lib/storybook-kit';

import { Header, HeaderProps } from './header';

export default {
  title: 'Examples/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = createVariant(Template, {
  user: {},
});

export const LoggedOut = createVariant(Template);
