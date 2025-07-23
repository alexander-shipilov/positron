import type { ReactComponent } from "@positron/react-core";
import type { ReactAnyProps } from "@positron/react-core";

import type {
  BlockDescriptorType
} from "../block-descriptor/block-descriptor-type";
import { BLOCK_TYPE } from "../block-descriptor/block-descriptor-type";
import type { Descriptor } from "../descriptor2";

import type { BlockDescriptor } from "./block-descriptor";

/**
 * The {@link BlockConfig} represents a config for the passed
 * `TDescriptor`.
 *
 * @typeParam TDescriptor - The block descriptor.
 */
export interface BlockConfig<TProps extends ReactAnyProps = ReactAnyProps>
  extends Descriptor<BlockDescriptorType> {
  readonly Component: ReactComponent<TProps>;
}

/**
 * The {@link block} function creates block descriptor.
 *
 * @param Component - The default component to render block.
 */
export function block<TProps extends ReactAnyProps>(
  Component: ReactComponent<TProps>,
): BlockDescriptor<TProps> {
  return {
    Component,
    type: BLOCK_TYPE,
  } as const;
}
