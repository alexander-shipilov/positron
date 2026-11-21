import type { NominalMeta } from "./nominal-meta";

/**
 * The {@link Nominal} type creates a new, more specific type based on the
 * passed `TType` by adding the provided additional metadata `TMeta` to it.
 *
 * @typeParam TType - The type to add metadata to.
 *
 * @typeParam TMeta - The additional metadata tuple.
 *
 * @public
 */
export type Nominal<
  TType,
  TMeta extends readonly unknown[],
> = NominalMeta<TMeta> & TType;
