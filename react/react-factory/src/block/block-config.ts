import type { ReactComponent, ReactProps } from "@positron/react-core";

import type { Descriptor } from "../descriptor";

import type { BlockType } from "./block-type";

/**
 * The {@link BlockConfig} represents a config for the passed
 * `TDescriptor`.
 *
 * @typeParam TDescriptor - The block descriptor.
 */
export interface BlockConfig<TProps extends ReactProps>
  extends Descriptor<BlockType> {
  Component: ReactComponent<TProps>;
}
