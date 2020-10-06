import './init';

import { argumentHistory } from '~/lib/test-kit';

import { $timer, $timerWorking, toggle } from './model';
import { tickFx } from './tick-fx';

describe('counter', () => {
  const tick = jest.fn().mockImplementation(async () => Promise.resolve());
  tickFx.use(tick);

  it('tick increases timer', () => {
    const timerFn = jest.fn();
    $timer.watch(timerFn);
    void tickFx();
    expect(argumentHistory(timerFn)).toMatchInlineSnapshot(`
      Array [
        0,
        1,
      ]
    `);
  });

  it('toggle changes timer status', () => {
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

  it('toggle increases timer', () => {
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
