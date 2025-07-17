import type { DescriptorPick } from "./descriptor-pick";
import type { DescriptorType } from "./descriptor-type";

export type DescriptorKeyOf<
  TProps,
  TType extends DescriptorType = DescriptorType,
> = keyof DescriptorPick<TProps, TType>;
