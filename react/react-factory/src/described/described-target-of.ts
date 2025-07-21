import type { Described } from "./described";

/**
 * The {@link DescribedTargetOf} type returns non-described `TTarget`.
 *
 * @typeParam TTarget - Maybe described value.
 *
 * @public
 */
export type DescribedTargetOf<TTarget> =
  TTarget extends Described<infer Props> ? Props : TTarget;
