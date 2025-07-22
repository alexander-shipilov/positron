import type { DescribedValueOf } from "../described";

import type { Value } from "./value";
import type { ValueConfig } from "./value-config";

export type ValueConfigOf<TTarget> =
  TTarget extends Value<infer Target, infer Meta>
    ? ValueConfig<DescribedValueOf<Target>, Meta>
    : never;
