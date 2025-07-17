/* eslint-disable perfectionist/sort-maps */

import {
  BigintType,
  BooleanType,
  FunctionType,
  NullType,
  NumberType,
  ObjectType,
  StringType,
  SymbolType,
  UndefinedType,
} from "@positron/core-types";

// noinspection JSPrimitiveTypeWrapperUsage
export const values = new Map<unknown, string>([
  [42n, BigintType],
  [0n, BigintType],

  [false, BooleanType],
  [true, BooleanType],

  [() => void 0, FunctionType],
  [Object, FunctionType],
  [class {}, FunctionType],

  [null, NullType],

  [42, NumberType],
  [NaN, NumberType],
  [+Infinity, NumberType],
  [-Infinity, NumberType],

  [{}, ObjectType],
  [[], ObjectType],
  [new Boolean(), ObjectType],
  [new Number(), ObjectType],
  [new String(), ObjectType],

  ["", StringType],
  [`template${1}`, StringType],

  [Symbol(), SymbolType],
  [Symbol.iterator, SymbolType],

  [undefined, UndefinedType],
]);
