import type { NominalType } from "@positron/nominal";

/**
 * @internal
 */
declare const B512IntType: unique symbol;

/**
 * The {@link B512IntType} type represents integer nominal type.
 *
 * @public
 */
export type B512IntType = NominalType<typeof B512IntType, "B512Int">;
