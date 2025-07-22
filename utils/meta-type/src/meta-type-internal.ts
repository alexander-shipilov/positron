import type { MetaData } from "./meta-data";
import type { MetaTypeMetadata } from "./meta-type-metadata";

/**
 * The {@link MetaTypeInternal} type provides internal implementation of the
 * meta-typing system.
 *
 * @internal
 */
export type MetaTypeInternal<
  TTarget = unknown,
  TData extends MetaData = MetaData,
> = MetaTypeMetadata<TData> & TTarget;
