import type { Descriptor } from "../descriptor";

import type { ModifierType } from "./modifier-type";
import type { ModifierValue } from "./modifier-value";
import type { ModifierValueTypeOf } from "./modifier-value-type-of";

export interface ModifierConfig<TValue extends ModifierValue = ModifierValue>
  extends Descriptor<ModifierType> {
  value: ModifierValueTypeOf<TValue>;
}
