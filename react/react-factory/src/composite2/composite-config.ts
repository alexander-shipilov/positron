import type { Descriptor } from "../descriptor2";
import type { ValueDescriptorType } from "../value/value-descriptor-type";
import type { ValueTarget } from "../value/value-target";

export interface CompositeConfig<TValue extends ValueTarget = ValueTarget>
  extends Descriptor<ValueDescriptorType> {
  readonly data: TValue;
}
