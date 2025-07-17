import type { ModifierKeyOf } from "./modifier-key-of";
import type { ModifierPick } from "./modifier-pick";

export type ModifierOf<
  TProps,
  TKey extends ModifierKeyOf<TProps> = ModifierKeyOf<TProps>,
> = ModifierPick<TProps>[TKey];
