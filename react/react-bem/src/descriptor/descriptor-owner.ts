import type { DescriptorClass } from "./descriptor-class";

export type DescriptorOwner<
  TValue,
  TDescriptor extends DescriptorClass,
> = TDescriptor & TValue;
