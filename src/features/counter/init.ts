import { guard } from 'effector';

import { VoidFn } from '~/lib/effector-kit';

import { $timer, $timerWorking, tickFx, toggle } from './model';

const tickDelay = 500;
const tick: VoidFn = async () => new Promise((rs) => setTimeout(rs, tickDelay));

tickFx.use(tick);

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
