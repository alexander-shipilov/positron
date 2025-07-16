/**
 * The {@link Falsy} type represents a falsy value.
 *
 * @remarks The {@link Falsy} type does not include `NaN` because in TypeScript
 *   type of `NaN` is `number`
 *
 * @public
 */
export type Falsy =
  | "" //
  | 0
  | 0n
  | false
  | null
  | undefined;
