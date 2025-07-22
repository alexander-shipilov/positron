import type { Descriptor } from "../core";

import type { BlockDescriptorData } from "./block-descriptor-data";
import type { BlockDescriptorType } from "./block-descriptor-type";
import type { BlockMeta } from "./block-meta";
import type { BlockProps } from "./block-props";

/**
 * The {@link BlockDescriptor} type represents a descriptor of the
 * {@link Block} property.
 *
 * @public
 */
export type BlockDescriptor<
  TProps extends BlockProps,
  TMeta extends BlockMeta,
> = Descriptor<BlockDescriptorType, BlockDescriptorData<TProps, TMeta>>;
