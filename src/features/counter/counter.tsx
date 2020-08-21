import { useStore } from 'effector-react';
import React from 'react';

import { getInverted } from '~/lib/effector-kit';

import { $timer, $timerWorking, toggle } from './model';

const onToggle = toggle.prepend(getInverted);

export const Counter = () => {
  const currentTime = useStore($timer);
  const isWorking = useStore($timerWorking);

  return (
    <figure>
      <button type="button" onClick={onToggle}>
        {isWorking ? 'Stop' : 'Launch'} timer
      </button>
      <p>Timer: {currentTime}</p>
    </figure>
  );
};
