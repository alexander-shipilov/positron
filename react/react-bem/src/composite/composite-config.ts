import type { Descriptor } from "../descriptor";

import type { CompositeType } from "./composite-type";
import type { CompositeValue } from "./composite-value";

export interface CompositeConfig<TValue extends CompositeValue = CompositeValue>
  extends Descriptor<CompositeType> {
  value: TValue;
}
