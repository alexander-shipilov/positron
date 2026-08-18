import { isBigintType } from "../bigint-type";
import { isBooleanType } from "../boolean-type";
import { isNumberType } from "../number-type";
import { isStringType } from "../string-type";
import { typeOf } from "../type-of";

import type { NumberLike } from "./number-like";

/**
 * The {@link isNumberLike} function is a type-guard function that determines
 * whether the passed `maybeNumberLike` is the {@link NumberLike}.
 *
 * @param maybeNumberLike - The value to be tested for being a
 *   {@link NumberLike}.
 *
 * @returns The boolean value `true` if the type of the given
 *   `maybeNumberLike` extends the {@link NumberLike} type.
 *   Otherwise, `false`.
 *
 * @public
 */
export function isNumberLike(
  maybeNumberLike: unknown,
): maybeNumberLike is NumberLike {
  const type = typeOf(maybeNumberLike);

  return (
    isBigintType(type) ||
    isBooleanType(type) ||
    isNumberType(type) ||
    isStringType(type)
  );
}
