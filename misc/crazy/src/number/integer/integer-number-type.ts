import type { NominalType } from "@positron/lang";

/**
 * @internal
 */
declare const IntegerNumberType: unique symbol;

/**
 * The {@link IntegerNumberType} type represents integer nominal type.
 *
 * @public
 */
export type IntegerNumberType = NominalType<
  typeof IntegerNumberType,
  "IntegerNumber"
>;
