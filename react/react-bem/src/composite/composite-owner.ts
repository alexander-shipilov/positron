import type { DescriptorClass, DescriptorOwner } from "../descriptor";

import type { CompositeDescriptor } from "./composite-descriptor";
import type { CompositeValue } from "./composite-value";

export type CompositeOwner<TValue extends CompositeValue = CompositeValue> =
  DescriptorOwner<TValue, DescriptorClass<CompositeDescriptor<TValue>>>;
