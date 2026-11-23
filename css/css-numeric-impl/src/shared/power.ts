import type { Nominal } from "@positron/lang";

/**
 * @public
 */
export type Power = Nominal<number, { readonly [0]: unique symbol }[0]>;
