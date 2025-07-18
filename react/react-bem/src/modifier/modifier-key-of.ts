import type { PropertyNameOf } from "@positron/core";

import type { ModifierPick } from "./modifier-pick";

export type ModifierKeyOf<TProps> = PropertyNameOf<ModifierPick<TProps>>;
