import type { OmitDescriptors } from "./omit-descriptors";
import type { PickDescriptors } from "./pick-descriptors";

/**
 * The {@link DescriptorExtract} type returns a tuple of props and descriptors.
 */
export type DescriptorExtract<TProps> = [
  OmitDescriptors<TProps>,
  PickDescriptors<TProps>,
];
