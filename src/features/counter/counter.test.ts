import './init';

import { allSettled, fork } from 'effector';

import { argumentHistory } from '~/lib/test-kit';

import { $timer, $timerWorking, domain, tickFx, toggle } from './model';

describe('counter', () => {
  const tick = jest.fn().mockImplementation(async () => Promise.resolve());
  tickFx.use(tick);

  it('tick increases timer', async () => {
    const scope = fork(domain, {
      values: new Map().set($timer, 3),
    });
    await allSettled(tickFx, { scope });
    expect(scope.getState($timer)).toBe(4);
  });

  it.skip('toggle changes timer status', () => {
    const statusFn = jest.fn();
    $timerWorking.watch(statusFn);
    toggle();
    toggle();
    expect(argumentHistory(statusFn)).toMatchInlineSnapshot(`
      Array [
        false,
        true,
        false,
      ]
    `);
  });

  it.skip('toggle increases timer', () => {
    const timerFn = jest.fn();
    $timer.watch(timerFn);
    toggle();
    toggle();
    expect(argumentHistory(timerFn)).toMatchInlineSnapshot(`
      Array [
        2,
        3,
      ]
    `);
  });
});
