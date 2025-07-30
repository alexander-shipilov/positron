import { NominalSymbols } from "@positron/nominal-symbols";

/**
 */
export type NominalType<
  TSymbol extends symbol = symbol,
  TName extends string = string,
> = NominalType_<TName> & TSymbol;

/**
 * @internal
 *
 * @internal
 */
declare class NominalType_<TName extends string> {
  private readonly [NominalSymbols.type]: [string | TName];
}
