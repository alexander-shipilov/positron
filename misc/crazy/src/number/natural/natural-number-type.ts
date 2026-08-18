import type { NominalType } from "@positron/nominal";

/**
 * @internal
 */
declare const NaturalNumberType: unique symbol;

/**
 * The {@link NaturalNumberType} type represents natural number nominal type.
 *
 * @public
 */
export type NaturalNumberType = NominalType<
  typeof NaturalNumberType,
  "NaturalNumber"
>;
