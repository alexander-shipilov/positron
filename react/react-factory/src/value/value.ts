import type { Described } from "../described";

import type { ValueDescriptor } from "./value-descriptor";
import type { ValueMeta } from "./value-meta";
import type { ValueTarget } from "./value-target";

export type Value<
  TTarget extends ValueTarget,
  TMeta extends ValueMeta = never,
> = Described<TTarget, ValueDescriptor<TMeta>>;
