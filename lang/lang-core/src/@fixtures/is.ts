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
} from "@positron/lang-type";

import type { TypeGuard } from "../type-guard";

import { isBigint } from "../bigint";
import { isBoolean } from "../boolean";
import { isFunction } from "../function";
import { isNull } from "../null";
import { isNumber } from "../number";
import { isObject } from "../object";
import { isString } from "../string";
import { isSymbol } from "../symbol";
import { isUndefined } from "../undefined";

// noinspection JSPrimitiveTypeWrapperUsage
export const values = new Map<unknown, string>([
  [42n, BigintType],

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

  [undefined, UndefinedType],
]);

export const tests = new Map<TypeGuard<unknown>, ReadonlySet<string> | string>([
  [isBigint, BigintType],
  [isBoolean, BooleanType],
  [isFunction, FunctionType],
  [isNull, NullType],
  [isNumber, NumberType],
  [isObject, ObjectType],
  [isString, StringType],
  [isSymbol, SymbolType],
  [isUndefined, UndefinedType],
]);
