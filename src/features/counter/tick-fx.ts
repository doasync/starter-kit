/* eslint-disable unicorn/no-abusive-eslint-disable */
import { createEffect, step } from 'effector';

import { VoidFn } from '~/lib/effector-kit';

const tickDelay = 500;

const tick: VoidFn = async () => new Promise((rs) => setTimeout(rs, tickDelay));

export const tickFx = createEffect(tick);

const enableFxOptions = <T>(fx: T): T => {
  /* eslint-disable */

  // @ts-expect-error: internal
  const defaultCreate = fx.create;

  // @ts-expect-error: internal
  fx.create = (params, [options]) => defaultCreate([params, options]);

  // @ts-expect-error: internal
  fx.graphite.seq.shift(
    step.compute({
      // @ts-expect-error: internal
      fn(upd, _, stack) {
        if (!stack.parent) {
          const {
            params: [params, strategy],
            req,
          } = upd;
          return { params, req, strategy };
        }
        return upd;
      },
    })
  );
  /* eslint-enable */

  return fx;
};

enableFxOptions(tickFx);
