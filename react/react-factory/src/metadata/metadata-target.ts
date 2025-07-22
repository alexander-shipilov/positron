import type { DescribedTarget } from "../described";

import type { MetadataValue } from "./metadata-value";

/**
 * The {@link MetadataTarget} type represents a value that can be described by
 * the {@link MetadataDescriptor}
 *
 * @public
 */
export type MetadataTarget = DescribedTarget<MetadataValue>;
