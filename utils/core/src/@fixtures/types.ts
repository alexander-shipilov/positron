import type { TypeGuard } from "../type-guard";
import { isBigint, isBigintLike } from "../bigint";
import { BIGINT_TYPE } from "../bigint-type";
import { isBoolean } from "../boolean";
import { BOOLEAN_TYPE } from "../boolean-type";
import { isFunction } from "../function";
import { FUNCTION_TYPE } from "../function-type";
import { isNull } from "../null";
import { NULL_TYPE } from "../null-type";
import { isNumber } from "../number";
import { NUMBER_TYPE } from "../number-type";
import { isNumberLike } from "../number/is-number-like";
import { isObject } from "../object";
import { OBJECT_TYPE } from "../object-type";
import { isPrimitive } from "../primitive";
import { isReference } from "../reference";
import { isString, isStringLike } from "../string";
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

const BIGINT_LIKE_TYPES = [BIGINT_TYPE, BOOLEAN_TYPE, NUMBER_TYPE, STRING_TYPE];
const NUMBER_LIKE_TYPES = [BIGINT_TYPE, BOOLEAN_TYPE, NUMBER_TYPE, STRING_TYPE];
const STRING_LIKE_TYPES = [
  BIGINT_TYPE,
  BOOLEAN_TYPE,
  NULL_TYPE,
  NUMBER_TYPE,
  STRING_TYPE,
  UNDEFINED_TYPE,
];

const REFERENCE_TYPES = [FUNCTION_TYPE, OBJECT_TYPE];
const PRIMITIVE_TYPES = [
  BIGINT_TYPE,
  BOOLEAN_TYPE,
  NULL_TYPE,
  NUMBER_TYPE,
  STRING_TYPE,
  SYMBOL_TYPE,
  UNDEFINED_TYPE,
];

export const isTypeTests = new Map<TypeGuard<unknown>, string[]>([
  [isBigint, [BIGINT_TYPE]],
  [isBigintLike, BIGINT_LIKE_TYPES],
  [isBoolean, [BOOLEAN_TYPE]],
  [isFunction, [FUNCTION_TYPE]],
  [isNull, [NULL_TYPE]],
  [isNumber, [NUMBER_TYPE]],
  [isNumberLike, NUMBER_LIKE_TYPES],
  [isObject, [OBJECT_TYPE]],
  [isPrimitive, PRIMITIVE_TYPES],
  [isReference, REFERENCE_TYPES],
  [isString, [STRING_TYPE]],
  [isStringLike, STRING_LIKE_TYPES],
  [isSymbol, [SYMBOL_TYPE]],
  [isUndefined, [UNDEFINED_TYPE]],
]);
