import { createDomain } from 'effector';

export const domain = createDomain();

// eslint-disable-next-line @typescript-eslint/unbound-method
const { createEffect, createEvent, createStore } = domain;

export const toggle = createEvent();
export const tickFx = createEffect<void, void>();
export const $timerWorking = createStore(false);
export const $timer = createStore(0);
