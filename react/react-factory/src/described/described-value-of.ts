import type { AnyFunction } from "@positron/core/src";

/**
 * The {@link DescribedValueOf} type returns a type of the passed descriptor
 * target `TTarget`. This is the return value of `TTarget` if `TTarget` is a
 * function that calculates descriptor value or `TTarget` otherwise.
 *
 * @typeParam TTarget - Modifier value to get type of.
 *
 * @public
 */
export type DescribedValueOf<TTarget> =
  TTarget extends AnyFunction<infer Value> ? Value : TTarget;
