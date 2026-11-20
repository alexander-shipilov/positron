import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

import type { Primitive } from "./primitive";

/**
 * The {@link isPrimitive} function determines whether the passed
 * `maybePrimitive` is a {@link Primitive}.
 *
 * @param maybePrimitive - The value to be tested for being a {@link Primitive}.
 *
 * @returns The boolean value `true` if the given `maybePrimitive` is a
 *   {@link Primitive}. Otherwise, `false`.
 *
 * @public
 */
export function isPrimitive(
  maybePrimitive: unknown,
): maybePrimitive is Primitive {
  const maybePrimitiveType = typeOf(maybePrimitive);

  return (
    maybePrimitiveType === Type.Bigint ||
    maybePrimitiveType === Type.Boolean ||
    maybePrimitiveType === Type.Null ||
    maybePrimitiveType === Type.Number ||
    maybePrimitiveType === Type.String ||
    maybePrimitiveType === Type.Symbol ||
    maybePrimitiveType === Type.Undefined
  );
}
