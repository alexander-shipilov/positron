import type { CompositeDescriptor } from "./composite-descriptor";

export type CompositeConfig<
  TDescriptor extends CompositeDescriptor = CompositeDescriptor,
> = TDescriptor["value"];
