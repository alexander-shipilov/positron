import { NominalSymbols } from "@positron/nominal-symbols";

/**
 */
export type UniqueSymbol<
  TSymbol extends symbol = symbol,
  TName extends string = string,
> = TSymbol & UniqueSymbol_<TName>;

/**
 * @internal
 *
 * @internal
 */
declare class UniqueSymbol_<TName extends string> {
  private readonly [NominalSymbols.type]: [string | TName];
}
