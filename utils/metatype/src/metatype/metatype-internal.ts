import type { Metadata } from "../metadata";

import type { MetatypeMetadata } from "./metatype-metadata";

/**
 * The {@link MetatypeInternal} type provides internal implementation of the
 * meta-typing system.
 *
 * @internal
 */
export type MetatypeInternal<
  TTarget = unknown,
  TData extends Metadata = Metadata,
> = MetatypeMetadata<TData> & TTarget;
