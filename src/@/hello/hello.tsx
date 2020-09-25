import React from 'react';
import styled from 'styled-components';

import wavingHandEmoji from './assets/emoji/1f44b.png';
import LogoSvg from './assets/logo.svg';
import { HelloProps } from './types';

const Box = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 16px;
`;

const Greeting = styled.div`
  display: inline-flex;
  align-items: center;
  margin: auto 16px;
  padding: 8px;
  color: #639;
  font-size: 24px;
  border: 1px solid #a9a9a9;
  border-radius: 5px;

  &:hover {
    border-color: #080;
  }
`;

const Logo = styled(LogoSvg)`
  width: 64px;
`;

// Root child
export const Hello = ({ greeting }: HelloProps) => (
  <Box>
    <img src={wavingHandEmoji} alt="Waving Hand Emoji" />
    <Greeting>{greeting}</Greeting>
    <Logo />
  </Box>
);
