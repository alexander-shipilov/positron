import type { DescribedValueOf } from "../described";

import type { Metadata } from "./metadata";
import type { MetadataConfig } from "./metadata-config";

export type MetadataConfigOf<TTarget> =
  TTarget extends Metadata<infer Target, infer Meta>
    ? MetadataConfig<DescribedValueOf<Target>, Meta>
    : never;
