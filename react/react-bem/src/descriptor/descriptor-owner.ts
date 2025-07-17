import type { Descriptor } from "./descriptor";

export type DescriptorOwner<
  TValue,
  TDescriptor extends Descriptor,
> = TDescriptor & TValue;
