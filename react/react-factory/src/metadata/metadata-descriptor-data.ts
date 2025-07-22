import type { MetadataMeta } from "./metadata-meta";

export type MetadataDescriptorData<TMeta extends MetadataMeta> = {
  meta: TMeta;
};
