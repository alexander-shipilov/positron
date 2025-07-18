import type { Descriptor } from "../descriptor";
import type { DescriptorOwner } from "../descriptor";

import type { ModifierProps } from "./modifier-props";
import type { ModifierValue } from "./modifier-value";

export type ModifierDescriptor<TValue extends ModifierValue = ModifierValue> =
  DescriptorOwner<TValue, Descriptor<ModifierProps<TValue>>>;
