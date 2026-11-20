import type { Nominal } from "./nominal";

/**
 * The {@link ExcludeNominal} type excludes nominal meta information from the
 * given type `TType`
 *
 * @example
 * ```ts
 *  type T1 = ExcludeNominal<Nominal<number>>;
 *  // number
 *
 *  type T2 = ExcludeNominal<Nominal<Nominal<string>>>;
 *  // string
 * ```
 *
 * @public
 */
export type ExcludeNominal<TType> =
  TType extends Nominal<infer Type> ? Type : TType;
