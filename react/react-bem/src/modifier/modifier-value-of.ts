import type { ModifierValue } from "./modifier-value";

export type ModifierValueOf<TValue> =
  TValue extends ModifierValue<infer Value> ? Value : never;
