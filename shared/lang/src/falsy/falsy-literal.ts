/**
 * The {@link FalsyLiteral} type represents a falsy value.
 *
 * @remarks
 *   The {@link FalsyLiteral} type does not include `NaN`, because in TypeScript
 *   `NaN` is not a literal, and its type is `number`.
 *
 * @public
 */
export type FalsyLiteral =
  | "" //
  | 0
  | 0n
  | false
  | null
  | undefined;
