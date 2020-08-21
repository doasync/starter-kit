import React from 'react';

import { Counter } from '~/features/counter';
import { Hello } from '~/features/hello';

export const Root = () => (
  <>
    <Hello greeting="Hello World!" />
    <Counter />
  </>
);
