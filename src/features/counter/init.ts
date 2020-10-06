import { guard } from 'effector';

import { $timer, $timerWorking, toggle } from './model';
import { tickFx } from './tick-fx';

$timerWorking.on(toggle, (state) => !state);
$timer.on(tickFx, (time) => time + 1);

guard({
  source: toggle,
  filter: tickFx.pending.map((is) => !is),
  target: tickFx,
});

guard({
  source: tickFx.doneData,
  filter: $timerWorking,
  target: tickFx,
});
