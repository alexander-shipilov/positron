import { IDENTIFIER_NAME_REGEXP } from "./identifier-name-regexp";

/**
 * The {@link isIdentifierName} function determines if the passed string
 * `maybeIdentifierName` is a valid identifier name.
 *
 * @param maybeIdentifierName - The string to be checked.
 *
 * @public
 */
export function isIdentifierName(maybeIdentifierName: string): boolean {
  return IDENTIFIER_NAME_REGEXP.test(maybeIdentifierName);
}
