import type { NominalTypeClass } from "./nominal-type-class";

/**
 * @internal
 */
export type NominalTypeInternal<
  TType extends symbol = symbol,
  TName extends string = string,
> = NominalType<TType, TName>;

/**
 * @internal
 */
type NominalType<
  TType extends symbol = symbol,
  TName extends string = string,
> = NominalTypeClass<TType, TName> & TType;
