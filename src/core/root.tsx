import React from 'react';

import { Counter } from '@/counter';
import { Hello } from '@/hello';

export const Root = () => (
  <>
    <Hello greeting="Hello World!" />
    <Counter />
  </>
);
