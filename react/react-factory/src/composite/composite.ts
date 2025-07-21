import type { Described } from "../described";

import type { CompositeTarget } from "./composite-target";

export type Composite<TTarget extends CompositeTarget> = Described<TTarget>;
