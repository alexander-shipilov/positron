import type { PropertyNameOf } from "@positron/core";

import type { PickModifiers } from "./pick-modifiers";

export type ModifierKeyOf<TProps> = PropertyNameOf<PickModifiers<TProps>>;
