import type { NominalTypeClass_ } from "./nominal-type-class_";

/**
 * @public
 */
export type NominalType_<
  TSymbol extends symbol = symbol,
  TName extends string = string,
> = NominalTypeClass_<TName> & TSymbol;
