import type { MetadataMeta } from "./metadata-meta";

export type MetadataConfig<TValue, TMeta extends MetadataMeta> = {
  readonly meta: TMeta;
  readonly value: TValue;
};
