import type { DescriptorKeyOf } from "./descriptor-key-of";

/**
 * The {@link DescriptorOmit} type return the passed `TProps` without
 * descriptors.
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type DescriptorOmit<TProps> = Omit<TProps, DescriptorKeyOf<TProps>>;
