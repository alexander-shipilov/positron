import type { NominalType } from "@positron/nominal";

/**
 * @internal
 */
declare const RealNumberType: unique symbol;

/**
 * The {@link RealNumberType} type represents real number nominal type.
 *
 * @public
 */
export type RealNumberType = NominalType<typeof RealNumberType, "RealNumber">;
