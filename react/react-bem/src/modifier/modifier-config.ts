import type { ModifierDescriptor } from "./modifier-descriptor";

export type ModifierConfig<
  TDescriptor extends ModifierDescriptor = ModifierDescriptor,
> = TDescriptor["value"];
