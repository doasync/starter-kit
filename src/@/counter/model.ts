import { createEvent, createStore } from 'effector';

export const toggle = createEvent();

export const $timerWorking = createStore(false);
export const $timer = createStore(0);
