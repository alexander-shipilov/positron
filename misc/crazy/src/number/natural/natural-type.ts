import type { NominalType } from "@positron/nominal";

/**
 * @public
 */
declare const NaturalType: unique symbol;

/**
 * The {@link NaturalType} type represents natural number nominal type.
 *
 * @public
 */
export type NaturalType = NominalType<typeof NaturalType, "Natural">;
