import { isBigintType } from "../bigint-type";
import { isBooleanType } from "../boolean-type";
import { isNullType } from "../null-type";
import { isNumberType } from "../number-type";
import { isStringType } from "../string-type";
import { isSymbolType } from "../symbol-type";
import { typeOf } from "../type-of";
import { isUndefinedType } from "../undefined-type";

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
