import { createEffect } from 'effector';

import { VoidFn } from '~/lib/effector-kit';

const tickDelay = 500;

const tick: VoidFn = async () => new Promise((rs) => setTimeout(rs, tickDelay));

export const tickFx = createEffect(tick);
