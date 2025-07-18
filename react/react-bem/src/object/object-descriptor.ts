import type { Descriptor } from "../descriptor";
import type { DescriptorOwner } from "../descriptor";

import type { ObjectProps } from "./object-props";
import type { ObjectValue } from "./object-value";

export type ObjectDescriptor<TValue extends ObjectValue = ObjectValue> =
  DescriptorOwner<TValue, Descriptor<ObjectProps<TValue>>>;
