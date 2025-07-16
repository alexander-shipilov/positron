import {
  isBigintType,
  isBooleanType,
  isNumberType,
  isStringType,
} from "@positron/lang-type";

import type { NumberLike } from "./number-like";

import { typeOf } from "../type-of";

/**
 * The {@link isNumberLike} function is a type-guard function that determines
 * whether the type of the passed value {@link maybeNumberLike} extends
 * the {@link NumberLike} type.
 *
 * This means that if the return value is `true`, then {@link maybeNumberLike}
 * is not strictly of type {@link NumberLike}, but is
 * `{@link NumberLike} & typeof maybeNumberLike`.
 *
 * @param maybeNumberLike - The value to be tested for being a
 *   {@link NumberLike}.
 *
 * @returns The boolean value `true` if the type of the given
 * {@link maybeNumberLike} extends the {@link NumberLike} type. Otherwise,
 *   `false`.
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
