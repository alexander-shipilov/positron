import { Type } from "../type/type";
import { typeOf } from "../type/type-of";

import type { Reference } from "./reference";

/**
 * The {@link isReference} function determines whether the passed
 * `maybeReference` is a {@link Reference}.
 *
 * @param maybeReference - The value to be tested for being a {@link Reference}.
 *
 * @returns The boolean value `true` if the given `maybeReference` is a
 *   {@link Reference}. Otherwise, `false`.
 *
 * @public
 */
export function isReference(
  maybeReference: unknown,
): maybeReference is Reference {
  const maybeReferenceType = typeOf(maybeReference);

  return (
    maybeReferenceType === Type.Function || //
    maybeReferenceType === Type.Object
  );
}
