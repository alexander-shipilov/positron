import type { Nominal } from "@positron/nominal";

import type { IntegerNumber } from "../integer";

import type { NaturalNumberType } from "./natural-number-type";

/**
 * The {@link NaturalNumber} type represents a natural number:
 * an integer from the range [0, 9].
 *
 * @public
 */
export type NaturalNumber = Nominal<IntegerNumber, NaturalNumberType>;
