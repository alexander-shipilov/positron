import type { DescribedTarget } from "../described";

import type { BlockValue } from "./block-value";

/**
 * The {@link BlockTarget} type represents a value that can be described by
 * the {@link BlockDescriptor}
 *
 * @public
 */
export type BlockTarget = DescribedTarget<BlockValue>;
