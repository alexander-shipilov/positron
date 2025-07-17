import type { PropertyName } from "@positron/core";

import type { DescriptorType } from "./descriptor-type";
import type { PickDescriptors } from "./pick-descriptors";

export type DescriptorKeyOf<
  TProps,
  TType extends DescriptorType = DescriptorType,
  TKey extends PropertyName = PropertyName,
> = TKey & keyof PickDescriptors<TProps, TType>;
