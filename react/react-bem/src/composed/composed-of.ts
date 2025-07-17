import type { ComposedKeyOf } from "./composed-key-of";
import type { ComposedPick } from "./composed-pick";

export type ComposedOf<
  TProps,
  TKey extends ComposedKeyOf<TProps> = ComposedKeyOf<TProps>,
> = ComposedPick<TProps>[TKey];
