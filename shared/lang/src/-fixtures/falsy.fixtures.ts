export const falsyFixtures = [
  undefined, //
  null,
  false,
  0,
  -0,
  0n,
  NaN,
  "",
];

// noinspection JSPrimitiveTypeWrapperUsage
export const nonFalsyFixtures = [
  new Object(null), //
  new Boolean(false),
  true,
  new Number(0),
  new Number(-0),
  1,
  -1,
  Infinity,
  -Infinity,
  1n,
  -1n,
  new String(""),
  "foo",
  {},
  [],
];
