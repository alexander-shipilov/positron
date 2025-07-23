import type { ReactAnyProps, ReactProps } from "@positron/react-core";

import type {
  BlockDescriptorType
} from "../block-descriptor/block-descriptor-type";
import type { Descriptor } from "../descriptor2";

/**
 * The {@link BlockDescriptor} type represents a descriptor of the
 * {@link Block} property.
 *
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export interface BlockDescriptor<TProps extends ReactProps = ReactAnyProps>
  extends Descriptor<BlockDescriptorType> {
  /**
   * Block class name.
   */
  readonly className?: string;

  /**
   * The properties required to render block.
   */
  readonly props: Partial<TProps>;
}
