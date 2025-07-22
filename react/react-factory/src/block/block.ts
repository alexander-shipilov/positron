import type { Described } from "../described";
import type { DescriptorMeta } from "../descriptor";

import type { BlockDescriptor } from "./block-descriptor";
import type { BlockMeta } from "./block-meta";
import type { BlockProps } from "./block-props";
import type { BlockTarget } from "./block-target";

/**
 * The {@link Block} type adds a block descriptor to the specified
 * `TValue`.
 *
 * @public
 */
export type Block<
  TProps extends BlockProps,
  TTarget extends BlockTarget,
  TMeta extends DescriptorMeta = never,
> = Described<TTarget, BlockDescriptor<TProps, BlockMeta & TMeta>>;
