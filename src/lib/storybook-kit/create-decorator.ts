import { Story } from '@storybook/react';
import { ComponentType, createElement } from 'react';

export const createDecorator = <Props = Record<string, unknown>>(
  component: ComponentType<Props>,
  props?: Props
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
) => (story: Story<Props>) =>
  createElement(component, props, createElement(story));
