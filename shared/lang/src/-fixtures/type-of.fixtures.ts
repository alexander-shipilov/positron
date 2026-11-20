// noinspection JSPrimitiveTypeWrapperUsage

import { Type } from "../type/type";

export const typeOfFixtures = new Map<unknown, Type>([
  ["", Type.String],
  [() => void 0, Type.Function],
  [-Infinity, Type.Number],
  [/a/, Type.Object],
  [42, Type.Number],
  [42n, Type.Bigint],
  [[], Type.Object],
  [`template1`, Type.String],
  [{}, Type.Object],
  // eslint-disable-next-line @typescript-eslint/no-extraneous-class
  [class {}, Type.Function],
  [false, Type.Boolean],
  [Infinity, Type.Number],
  [NaN, Type.Number],
  [new Boolean(), Type.Object],
  [new Number(), Type.Object],
  [new String(), Type.Object],
  [null, Type.Null],
  [Object, Type.Function],
  [Symbol(), Type.Symbol],
  [true, Type.Boolean],
  [undefined, Type.Undefined],
]);
