import type { OmitDescriptors } from "./omit-descriptors";
import type { PickDescriptors } from "./pick-descriptors";

/**
 * The {@link ExtractDescriptors} type returns a tuple of props and descriptors.
 */
export type ExtractDescriptors<TProps> = [
  OmitDescriptors<TProps>,
  PickDescriptors<TProps>,
];
