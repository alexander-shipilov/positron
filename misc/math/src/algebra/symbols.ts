export interface Symbols {
  readonly cmp: unique symbol;

  readonly eq: unique symbol;

  readonly is: unique symbol;
}

export const Symbols = {
  cmp: Symbol("@cmp"),
  eq: Symbol("@eq"),
  is: Symbol("@is"),
} as Symbols;
