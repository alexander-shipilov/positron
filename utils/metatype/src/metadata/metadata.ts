import type { TypedObject } from "@positron/core/src";

export type Metadata<
  TTag extends PropertyKey = PropertyKey,
  TData = unknown,
> = TypedObject<PropertyKey extends TTag ? unknown : TData, TTag>;
