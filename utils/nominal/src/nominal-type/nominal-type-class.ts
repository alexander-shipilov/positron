import { NominalSymbol } from "@positron/nominal-symbol";

/**
 * @internal
 */
export type NominalTypeClass<
  TType extends symbol,
  TName extends string,
> = NominalType<TType, TName>;

/**
 * @internal
 */
declare class NominalType<TType extends symbol, TName extends string> {
  private readonly [NominalSymbol]: [string | TName, TType];
}
