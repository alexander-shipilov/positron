import type { Nominal } from "../nominal";

/**
 * The {@link OmitNominal} type excludes all nominal types from
 * passed type `TTarget`.
 *
 * @example
 * ```ts
 *  type integer = Nominal<number, "integer">
 *
 *  const int: ExcludeNominal<integer> = 1
 * ```
 *
 * @param TType - The type to make nominal type from
 * @param TNominalType - Tag name
 *
 * @public
 */
export type OmitNominal<TTarget> =
  TTarget extends Nominal<infer Target> ? Target : TTarget;
