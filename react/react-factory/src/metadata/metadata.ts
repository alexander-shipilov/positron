import type { Described } from "../described";

import type { MetadataDescriptor } from "./metadata-descriptor";
import type { MetadataMeta } from "./metadata-meta";
import type { MetadataTarget } from "./metadata-target";

export type Metadata<
  TTarget extends MetadataTarget,
  TMeta extends MetadataMeta = never,
> = Described<TTarget, MetadataDescriptor<TMeta>>;
