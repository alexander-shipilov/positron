import type { Nominal } from "@positron/lang";

/**
 * The {@link Power} type represents a nominal safe integer `number` denoting
 * a unit exponent.
 *
 * @public
 */
export type Power = Nominal<number, { readonly [0]: unique symbol }[0]>;
