const foo = { a: 1 } as const;
const bar = { a: 1 } as const;
const arr = [] as const;

export const equalSameFixtures: [value: unknown, expected: unknown][] = [
  [undefined, undefined],
  [null, null],
  [true, true],
  [false, false],
  [-1, -1],
  [1, 1],
  [-Infinity, -Infinity],
  [Infinity, Infinity],
  [-1n, -1n],
  [0n, 0n],
  [1n, 1n],
  ["", ""],
  ["foo", "foo"],
  [foo, foo],
  [bar, bar],
  [arr, arr],
];
