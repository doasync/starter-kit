export const argumentHistory = (fn: jest.Mock): unknown[] =>
  fn.mock.calls.map(([argument]: [unknown]) => argument);
