import type { Descriptor } from "../descriptor2";

import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";

export interface ModifierConfig<TValue extends ModifierValue = ModifierValue>
  extends Descriptor<ModifierType> {
  readonly data: TValue;
}
