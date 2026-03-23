import type { NominalType } from "@positron/nominal";

/**
 * @public
 */
declare const IntegerType: unique symbol;

/**
 * The {@link IntegerType} type represents integer nominal type.
 *
 * @public
 */
export type IntegerType = NominalType<typeof IntegerType, "Integer">;
