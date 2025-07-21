import type { DescriptorType } from "../descriptor/descriptor-type";

export type DescriptorConfig<TType extends DescriptorType = DescriptorType> =
  TType;
