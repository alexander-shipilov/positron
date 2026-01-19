import type { NominalType } from "@positron/nominal";

declare const DigitType: unique symbol;

/**
 * The {@link DigitType} type represents digit nominal type.
 *
 * @public
 */
export type DigitType = NominalType<typeof DigitType, "Digit">;
