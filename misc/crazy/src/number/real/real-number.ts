import type { Nominal } from "@positron/nominal";

import type { RealNumberType } from "./real-number-type";

/**
 * The {@link RealNumber} type represents a real number: any finite number.
 *
 * @public
 */
export type RealNumber = Nominal<number, RealNumberType>;
