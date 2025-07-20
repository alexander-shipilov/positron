import type { DescriptorType } from "./descriptor-type";

export type DescriptorConfig<TType extends DescriptorType = DescriptorType> =
  TType;
