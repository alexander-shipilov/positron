import {
  isBigintType,
  isBooleanType,
  isNullType,
  isNumberType,
  isStringType,
  isSymbolType,
  isUndefinedType,
} from "@positron/core-types";

import { typeOf } from "../type-of";

import type { Primitive } from "./primitive";

/**
 * The {@link isPrimitive} function determines whether the passed
 * {@link maybePrimitive} is a {@link Primitive}.
 *
 * @param maybePrimitive - The value to be tested for being a {@link Primitive}.
 *
 * @returns The boolean value `true` if the given {@link maybePrimitive} is a
 *   {@link Primitive}. Otherwise, `false`.
 *
 * @public
 */
export function isPrimitive(
  maybePrimitive: unknown,
): maybePrimitive is Primitive {
  const type = typeOf(maybePrimitive);

  return (
    isBigintType(type) ||
    isBooleanType(type) ||
    isNullType(type) ||
    isNumberType(type) ||
    isStringType(type) ||
    isSymbolType(type) ||
    isUndefinedType(type)
  );
}
