import type { PropertyOwner } from "@positron/core";

import type { MetaType_ } from "./meta-type-";

export type MetaTypeOf<TType, TTag extends symbol = symbol> =
  TType extends MetaType_<infer Data>
    ? Data extends PropertyOwner<TTag, infer Value>
      ? Value
      : never
    : never;
