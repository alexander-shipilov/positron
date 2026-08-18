import type { NominalType } from "@positron/nominal";

/**
 * @public
 */
export declare const RationalType: unique symbol;

/**
 * The {@link (RationalType:type)} type represents rational nominal type.
 *
 * @public
 */
export type RationalType = NominalType<typeof RationalType, "Rational">;
