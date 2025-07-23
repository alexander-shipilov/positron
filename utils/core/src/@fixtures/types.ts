import type { TypeGuard } from "../type-guard";
import { isBigint } from "../bigint";
import { BIGINT_TYPE } from "../bigint-type";
import { isBoolean } from "../boolean";
import { BOOLEAN_TYPE } from "../boolean-type";
import { isFunction } from "../function";
import { FUNCTION_TYPE } from "../function-type";
import { isNull } from "../null";
import { NULL_TYPE } from "../null-type";
import { isNumber } from "../number";
import { NUMBER_TYPE } from "../number-type";
import { isObject } from "../object";
import { OBJECT_TYPE } from "../object-type";
import { isString } from "../string";
import { STRING_TYPE } from "../string-type";
import { isSymbol } from "../symbol";
import { SYMBOL_TYPE } from "../symbol-type";
import { isUndefined } from "../undefined";
import { UNDEFINED_TYPE } from "../undefined-type";

// noinspection JSPrimitiveTypeWrapperUsage
export const typesValues = new Map<unknown, string>([
  ["", STRING_TYPE],

  [() => void 0, FUNCTION_TYPE],
  [+Infinity, NUMBER_TYPE],

  [-Infinity, NUMBER_TYPE],
  [42, NUMBER_TYPE],
  [42n, BIGINT_TYPE],

  [[], OBJECT_TYPE],

  [`template${1}`, STRING_TYPE],
  [{}, OBJECT_TYPE],
  [class {}, FUNCTION_TYPE],
  [false, BOOLEAN_TYPE],

  [NaN, NUMBER_TYPE],
  [new Boolean(), OBJECT_TYPE],
  [new Number(), OBJECT_TYPE],
  [new String(), OBJECT_TYPE],
  [null, NULL_TYPE],

  [Object, FUNCTION_TYPE],
  [Symbol(), SYMBOL_TYPE],

  [true, BOOLEAN_TYPE],

  [undefined, UNDEFINED_TYPE],
]);

export const isTypeTests = new Map<
  TypeGuard<unknown>,
  ReadonlySet<string> | string
>([
  [isBigint, BIGINT_TYPE],
  [isBoolean, BOOLEAN_TYPE],
  [isFunction, FUNCTION_TYPE],
  [isNull, NULL_TYPE],
  [isNumber, NUMBER_TYPE],
  [isObject, OBJECT_TYPE],
  [isString, STRING_TYPE],
  [isSymbol, SYMBOL_TYPE],
  [isUndefined, UNDEFINED_TYPE],
]);
