import type { Nominal } from "@positron/lang";

/**
 * The {@link Double} type represents a nominal finite `number` corresponding
 * to a WebIDL `double`.
 *
 * @public
 */
export type Double = Nominal<number, { readonly [0]: unique symbol }[0]>;
