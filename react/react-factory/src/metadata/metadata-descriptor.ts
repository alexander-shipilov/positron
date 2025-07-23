import type { Descriptor, MetadataMeta } from "../core";

import type { MetadataDescriptorData } from "./metadata-descriptor-data";
import type { MetadataDescriptorType } from "./metadata-descriptor-type";

/**
 * The {@link MetadataDescriptor} type represents a descriptor of the
 * {@link Metadata} property.
 *
 * @public
 */
export type MetadataDescriptor<TMeta extends MetadataMeta> = Descriptor<
  MetadataDescriptorType,
  MetadataDescriptorData<TMeta>
>;
