import { assertType, debug, template } from "@positron/lang";

import type { Identifier } from "./identifier";
import { isIdentifier } from "./is-identifier";

/**
 * The {@link toIdentifier} function converts the passed string `value` to the
 * {@link Identifier}
 *
 * @param value - Value to convert to identifier
 *
 * @throws SyntaxError if the passed `value` is a keyword or contains illegal
 *   symbols.
 *
 * @public
 */
export function toIdentifier(value: string): Identifier {
  return assertType(
    value,
    isIdentifier,
    () => template`${0} is not a valid identifier`(debug(value)),
    SyntaxError,
  );
}
