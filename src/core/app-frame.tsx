import '~/assets/fonts/styles';
import '~/assets/styles/app.scss';

import React from 'react';

import { Children } from '~/lib/types';

import { GlobalStyle } from './global-style';

export const AppFrame = ({ children }: Children) => (
  <>
    <GlobalStyle />
    {children}
  </>
);
