import type { Nominal } from "./nominal";

/**
 * The {@link ExcludeNominal} type excludes nominal meta-information from the
 * given type `TType`.
 *
 * @example
 * ```ts
 * import type { ExcludeNominal, Nominal } from "@positron/lang";
 *
 * type T1 = ExcludeNominal<Nominal<number>>;
 * // number
 *
 * type T2 = ExcludeNominal<Nominal<Nominal<string>>>;
 * // string
 * ```
 *
 * @typeParam TType - The type to exclude nominal metadata from.
 *
 * @public
 */
export type ExcludeNominal<TType> =
  TType extends Nominal<infer Type> ? Type : TType;
