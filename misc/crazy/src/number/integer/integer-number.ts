import type { Nominal } from "@positron/nominal";

import type { RealNumber } from "../real";

import type { IntegerNumberType } from "./integer-number-type";

/**
 * The {@link IntegerNumber} type represents an integer number.
 *
 * @public
 */
export type IntegerNumber = Nominal<RealNumber, IntegerNumberType>;
