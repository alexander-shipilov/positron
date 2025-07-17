import type { DescriptorOmit } from "./descriptor-omit";
import type { DescriptorPick } from "./descriptor-pick";

/**
 * The {@link DescriptorExtract} type returns a tuple of props and descriptors.
 */
export type DescriptorExtract<TProps> = [
  DescriptorOmit<TProps>,
  DescriptorPick<TProps>,
];
