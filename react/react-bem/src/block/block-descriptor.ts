import type { ReactAnyProps, ReactProps } from "@positron/react-core";

import type { Descriptor } from "../descriptor";

import type { BlockType } from "./block-type";

/**
 * The {@link BlockDescriptor} type represents a descriptor of the
 * {@link Block} property.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export interface BlockDescriptor<TProps extends ReactProps = ReactAnyProps>
  extends Descriptor<BlockType> {
  /**
   * Block class name.
   */
  className?: string;

  /**
   * The properties required to render block.
   */
  props: Partial<TProps>;
}
