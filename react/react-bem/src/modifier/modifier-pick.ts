import type { DescriptorPick } from "../descriptor";

import type { ModifierType } from "./modifier-type";

export type ModifierPick<TProps> = DescriptorPick<TProps, ModifierType>;
