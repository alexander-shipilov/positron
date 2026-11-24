import type { Nominal } from "@positron/lang";

import type { RealNumber } from "../real";

/**
 * The {@link IntegerNumber} type represents an integer number.
 *
 * @public
 */
export type IntegerNumber = Nominal<RealNumber, "Integer">;
