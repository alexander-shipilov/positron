import type { DescriptorClass, DescriptorOwner } from "../descriptor";

import type { ModifierDescriptor } from "./modifier-descriptor";
import type { ModifierValue } from "./modifier-value";

export type ModifierOwner<TValue extends ModifierValue = ModifierValue> =
  DescriptorOwner<TValue, DescriptorClass<ModifierDescriptor<TValue>>>;
