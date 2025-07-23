import type { Nominal, NominalType } from "@positron/nominal";

/**
 * Type {@link ClassName} describes a defined value of `className` property.
 * It should be a non-empty string.
 *
 * @public
 */
export type ClassName = Nominal<string, ClassNameType>;

/**
 * Internal
 */
declare const ClassNameType: unique symbol;

/**
 * Internal
 */
type ClassNameType = NominalType<typeof ClassNameType, "ClassName">;
