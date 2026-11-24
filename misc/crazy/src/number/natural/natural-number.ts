import type { Nominal } from "@positron/lang";

import type { IntegerNumber } from "../integer";

/**
 * The {@link NaturalNumber} type represents a natural number:
 * an integer from the range [0, 9].
 *
 * @public
 */
export type NaturalNumber = Nominal<IntegerNumber, "Natural">;
