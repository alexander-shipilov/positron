import type { DescribedNominal } from "../descriptor2";
import type { ValueDescriptor } from "../value/value-descriptor";

import type { CompositeConfig } from "./composite-config";

/**
 * The {@link CompositeConfigOf} creates a composite config from the passed
 * `TValue`.
 *
 * @internal
 */
export type CompositeConfigOf<TValue> =
  TValue extends DescribedNominal<infer Descriptor extends ValueDescriptor>
    ? CompositeConfig<Descriptor["value"]>
    : never;
