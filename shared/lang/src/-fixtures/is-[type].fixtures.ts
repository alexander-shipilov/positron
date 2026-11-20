import { isBigint } from "../bigint/is-bigint";
import { isBoolean } from "../boolean/is-boolean";
import { isFunction } from "../function/is-function";
import { isIndexKeyLike } from "../indexed/is-index-key-like";
import { isKey } from "../key/is-key";
import { isNull } from "../null/is-null";
import { isNullLike } from "../null/is-null-like";
import { isNumber } from "../number/is-number";
import { isNumeric } from "../numeric/is-numeric";
import { isNumericLike } from "../numeric/is-numeric-like";
import { isObject } from "../object/is-object";
import { isPrimitive } from "../primitive/is-primitive";
import { isReference } from "../reference/is-reference";
import { isString } from "../string/is-string";
import { isStringLike } from "../string/is-string-like";
import { isSymbol } from "../symbol/is-symbol";
import { Type } from "../type/type";
import { isUndefined } from "../undefined/is-undefined";

export const isTypeFixtures = new Map<
  (value: unknown) => boolean,
  ReadonlySet<Type>
>([
  [
    isBigint,
    new Set([
      Type.Bigint, //
    ]),
  ],
  [
    isBoolean,
    new Set([
      Type.Boolean, //
    ]),
  ],
  [
    isFunction,
    new Set([
      Type.Function, //
    ]),
  ],
  [
    isIndexKeyLike,
    new Set([
      Type.Number, //
      Type.String,
    ]),
  ],
  [
    isKey,
    new Set([
      Type.Number, //
      Type.String,
      Type.Symbol,
    ]),
  ],
  [
    isNull,
    new Set([
      Type.Null, //
    ]),
  ],
  [
    isNullLike,
    new Set([
      Type.Null, //
      Type.Undefined,
    ]),
  ],
  [
    isNumber,
    new Set([
      Type.Number, //
    ]),
  ],
  [
    isNumeric,
    new Set([
      Type.Bigint, //
      Type.Number,
    ]),
  ],
  [
    isNumericLike,
    new Set([
      Type.Bigint, //
      Type.Boolean,
      Type.Number,
      Type.String,
    ]),
  ],
  [
    isObject,
    new Set([
      Type.Object, //
    ]),
  ],
  [
    isPrimitive,
    new Set([
      Type.Bigint, //
      Type.Boolean,
      Type.Null,
      Type.Number,
      Type.String,
      Type.Symbol,
      Type.Undefined,
    ]),
  ],
  [
    isReference,
    new Set([
      Type.Function, //
      Type.Object,
    ]),
  ],
  [
    isString,
    new Set([
      Type.String, //
    ]),
  ],
  [
    isStringLike,
    new Set([
      Type.Bigint, //
      Type.Boolean,
      Type.Null,
      Type.Number,
      Type.String,
      Type.Undefined,
    ]),
  ],
  [
    isSymbol,
    new Set([
      Type.Symbol, //
    ]),
  ],
  [
    isUndefined,
    new Set([
      Type.Undefined, //
    ]),
  ],
]);
