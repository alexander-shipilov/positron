import type { BlockDescriptor } from "./block-descriptor";

/**
 * The {@link BlockConfig} represents a config for the passed `TDescriptor`.
 *
 * @typeParam TDescriptor - The block descriptor.
 */
export type BlockConfig<TDescriptor extends BlockDescriptor> =
  TDescriptor["Component"];
