import type { TypedObject } from "@positron/core/src";

export type MetaData<
  TTag extends symbol = symbol,
  TData = unknown,
> = TypedObject<symbol extends TTag ? unknown : TData, TTag>;
