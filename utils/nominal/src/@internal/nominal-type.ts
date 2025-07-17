import type { NominalType as NominalTypeClass } from "./nominal-type.class";

/**
 * @internal
 */
export type NominalType<
  TType extends symbol = symbol,
  TName extends string = string,
> = NominalTypeClass<TType, TName> & TType;
