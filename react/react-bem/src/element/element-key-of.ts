import type { PropertyName } from "@positron/core";

import type { DescriptorKeyOf } from "../descriptor";

import type { ElementType } from "./element-type";

export type ElementKeyOf<
  TProps,
  TKey extends PropertyName = PropertyName,
> = DescriptorKeyOf<TProps, ElementType, TKey>;
