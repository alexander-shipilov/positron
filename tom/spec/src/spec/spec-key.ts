/**
 * @public
 */
export interface SpecKey {
  readonly Call: unique symbol;
  readonly New: unique symbol;
  readonly Number: unique symbol;
  readonly String: unique symbol;
  readonly Symbol: unique symbol;
}

/**
 * @public
 */
export const SpecKey = {
  Call: Symbol("call"),
  New: Symbol("new"),
  Number: Symbol("number"),
  String: Symbol("string"),
  Symbol: Symbol("symbol"),
} as SpecKey;
