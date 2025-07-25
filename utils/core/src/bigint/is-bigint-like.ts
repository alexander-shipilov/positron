import { isBigintType } from "../bigint-type";
import { isBooleanType } from "../boolean-type";
import { isNumberType } from "../number-type";
import { isStringType } from "../string-type";
import { typeOf } from "../type-of";

import type { BigintLike } from "./bigint-like";

/**
 * The {@link isBigintLike} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeBigintLike} extends
 * the {@link BigintLike} type.
 *
 * This means that if the return value is `true`, then {@link maybeBigintLike}
 * is not strictly of type {@link BigintLike}, but is
 * `{@link BigintLike} & typeof maybeBigintLike`.
 *
 * @param maybeBigintLike - The value to be tested for being a
 *   {@link BigintLike}.
 *
 * @returns The boolean value `true` if the type of the given
 * {@link maybeBigintLike} extends the {@link BigintLike} type. Otherwise,
 *   `false`.
 *
 * @public
 */
export function isBigintLike(
  maybeBigintLike: unknown,
): maybeBigintLike is BigintLike {
  const type = typeOf(maybeBigintLike);

  return (
    isBigintType(type) ||
    isBooleanType(type) ||
    isNumberType(type) ||
    isStringType(type)
  );
}
