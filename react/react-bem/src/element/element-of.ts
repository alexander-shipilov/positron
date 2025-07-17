import type { ElementKeyOf } from "./element-key-of";
import type { ElementPick } from "./element-pick";

export type ElementOf<
  TProps,
  TKey extends ElementKeyOf<TProps> = ElementKeyOf<TProps>,
> = ElementPick<TProps>[TKey];
