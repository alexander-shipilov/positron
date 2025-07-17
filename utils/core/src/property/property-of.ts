import type { PropertyKeyOf } from "./property-key-of";

export type PropertyOf<
  TValue,
  TKey extends PropertyKey = PropertyKey,
> = TValue[PropertyKeyOf<TValue, TKey>];
