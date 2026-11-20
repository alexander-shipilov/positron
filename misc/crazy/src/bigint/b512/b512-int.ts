import type { Nominal } from "@positron/lang";

import type { B512IntType } from "./b512-int-type";

/**
 * The {@link B512Int} type represents an integer number.
 *
 * @public
 */
export type B512Int = Nominal<bigint, B512IntType>;
