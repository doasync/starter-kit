import { Story } from '@storybook/react';
import { ComponentType, createElement } from 'react';

export const createDecorator = <Props = Record<string, unknown>>(
  component: ComponentType<Props>,
  props?: Props
) => (story: Story<Props>): JSX.Element =>
  createElement(component, props, createElement(story));
