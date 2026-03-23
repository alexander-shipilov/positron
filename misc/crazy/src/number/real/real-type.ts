import type { NominalType } from "@positron/nominal";

/**
 * @public
 */
declare const RealType: unique symbol;

/**
 * The {@link RealType} type represents real number nominal type.
 *
 * @public
 */
export type RealType = NominalType<typeof RealType, "Real">;
