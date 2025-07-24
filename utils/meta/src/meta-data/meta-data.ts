import type { TypedObject } from "@positron/core/src";

/**
 * @internal
 */
export type MetaData<
  TTag extends symbol = symbol,
  TValue = unknown,
> = TypedObject<TValue, TTag>;
