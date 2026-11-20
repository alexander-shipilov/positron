import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

import type { Numeric } from "./numeric";

/**
 * The {@link isNumeric} function determines whether the passed `maybeNumeric`
 * is a {@link Numeric}.
 *
 * @param maybeNumeric - The value to be tested for being a {@link Numeric}.
 *
 * @returns The boolean value `true` if the given `maybeNumeric` is a
 *   {@link Numeric}. Otherwise, `false`.
 *
 * @public
 */
export function isNumeric(maybeNumeric: unknown): maybeNumeric is Numeric {
  const maybeNumericType = typeOf(maybeNumeric);

  return (
    maybeNumericType === Type.Bigint || //
    maybeNumericType === Type.Number
  );
}
