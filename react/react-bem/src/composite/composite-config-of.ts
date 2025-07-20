import type { DescriptorNominal } from "../descriptor";

import type { CompositeConfig } from "./composite-config";
import type { CompositeDescriptor } from "./composite-descriptor";

/**
 * The {@link CompositeConfigOf} creates a composite config from the passed
 * `TValue`.
 *
 * @internal
 */
export type CompositeConfigOf<TValue> =
  TValue extends DescriptorNominal<infer Descriptor extends CompositeDescriptor>
    ? CompositeConfig<Descriptor>
    : never;
