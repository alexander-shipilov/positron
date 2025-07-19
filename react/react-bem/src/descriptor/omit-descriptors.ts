import type { DescriptorKeyOf } from "./descriptor-key-of";

/**
 * The {@link OmitDescriptors} type return the passed `TProps` without
 * descriptors.
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type OmitDescriptors<TProps> = Omit<TProps, DescriptorKeyOf<TProps>>;
