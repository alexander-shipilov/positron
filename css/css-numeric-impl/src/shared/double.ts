import type { Nominal } from "@positron/lang";

/**
 * @public
 */
export type Double = Nominal<number, { readonly [0]: unique symbol }[0]>;
