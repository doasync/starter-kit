import { Meta, Story } from '@storybook/react';
import React from 'react';

import { createVariant } from '~/lib/storybook-kit';

import * as HeaderStories from './header.stories';
import { Page, PageProps } from './page';

export default {
  title: 'Examples/Page',
  component: Page,
  parameters: { layout: 'fullscreen' },
} as Meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const LoggedIn = createVariant(Template, {
  ...HeaderStories.LoggedIn.args,
});

export const LoggedOut = createVariant(Template, {
  ...HeaderStories.LoggedOut.args,
});
