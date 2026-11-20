import type { Nominal } from "@positron/lang";

/**
 * The {@link Identifier} type represents an identifier:
 * a sequence of characters in the code that identifies a variable, function,
 * or property.
 *
 * @remarks
 *   Identifiers can contain Unicode letters, "$", "_", and digits (0-9), but
 *   may not start with a digit.
 *
 * @public
 */
export type Identifier = Nominal<string, "Identifier">;
