import type { DescribedNominal } from "./described-nominal";

/**
 * The {@link DescribedBy} type return {@link Descriptor} assigned to the
 * passed `TTarget` or `never` if `TTarget` is not described by any
 * {@link Descriptor}
 *
 * @typeParam TTarget - The value to get assigned descriptor by.
 *
 * @public
 */
export type DescribedBy<TTarget> =
  TTarget extends DescribedNominal<infer Descriptor> ? Descriptor : never;
