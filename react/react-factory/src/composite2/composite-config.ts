import type { CompositeDescriptorType } from "../composite/composite-descriptor-type";
import type { CompositeTarget } from "../composite/composite-target";
import type { Descriptor } from "../descriptor2";

export interface CompositeConfig<
  TValue extends CompositeTarget = CompositeTarget,
> extends Descriptor<CompositeDescriptorType> {
  readonly data: TValue;
}
