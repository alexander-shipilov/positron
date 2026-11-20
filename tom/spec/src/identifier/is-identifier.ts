import type { Identifier } from "./identifier";
import { isIdentifierName } from "./is-identifier-name";
import { NOT_IDENTIFIERS } from "./not-identifiers";

/**
 * The {@link isIdentifier} type-guard function determines if the passed value
 * `maybeIdentifier` is a valid {@link Identifier}.
 *
 * @param maybeIdentifier - The value to be checked.
 *
 * @public
 */
export function isIdentifier(
  maybeIdentifier: string,
): maybeIdentifier is Identifier {
  return (
    isIdentifierName(maybeIdentifier) && !NOT_IDENTIFIERS.has(maybeIdentifier)
  );
}
