import type { TypedObject } from "@positron/core";

/**
 * @internal
 */
export type MetaData<
  TTag extends symbol = symbol,
  TValue = unknown,
> = TypedObject<TValue, TTag>;
