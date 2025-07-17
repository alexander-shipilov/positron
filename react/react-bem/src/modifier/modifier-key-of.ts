import type { ModifierPick } from "./modifier-pick";

export type ModifierKeyOf<TProps> = keyof ModifierPick<TProps>;
