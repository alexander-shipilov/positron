import { isFunctionType, isObjectType } from "@positron/core-types";

import { typeOf } from "../type-of";

import type { Reference } from "./reference";

/**
 * The {@link isReference} function determines whether the passed
 * {@link maybeReference} is a {@link Reference}.
 *
 * @param maybeReference - The value to be tested for being a {@link Reference}.
 *
 * @returns The boolean value `true` if the given {@link maybeReference} is a
 *   {@link Reference}. Otherwise, `false`.
 *
 * @public
 */
export function isReference(
  maybeReference: unknown,
): maybeReference is Reference {
  const type = typeOf(maybeReference);

  return isFunctionType(type) || isObjectType(type);
}
