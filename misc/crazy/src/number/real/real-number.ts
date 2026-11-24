import type { Nominal } from "@positron/lang";

/**
 * The {@link RealNumber} type represents a real number: any finite number.
 *
 * @public
 */
export type RealNumber = Nominal<number, "real">;
