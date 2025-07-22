import type { MetaData } from "./meta-data";
import type { MetaTypeInternal } from "./meta-type-internal";

/**
 * The {@link MetaType} type creates a new meta=-type.
 *
 * @public
 */
export type MetaType<
  TTarget,
  TTag extends symbol = symbol,
  TValue = unknown,
> = MetaTypeInternal<TTarget, MetaData<TTag, TValue>>;
