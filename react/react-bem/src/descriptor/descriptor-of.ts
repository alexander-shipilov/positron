import type { DescriptorKeyOf } from "./descriptor-key-of";
import type { DescriptorPick } from "./descriptor-pick";

export type DescriptorOf<
  TProps,
  TKey extends DescriptorKeyOf<TProps> = DescriptorKeyOf<TProps>,
> = DescriptorPick<TProps>[TKey];
