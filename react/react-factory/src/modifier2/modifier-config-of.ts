import type { DescribedNominal } from "../descriptor2";

import type { ModifierConfig } from "./modifier-config";
import type { ModifierDescriptor } from "./modifier-descriptor";

/**
 * The {@link ModifierConfigOf} returns the config for the passed `TModifier`
 * descriptor.
 *
 * @internal
 */
export type ModifierConfigOf<TValue> =
  TValue extends DescribedNominal<infer Descriptor extends ModifierDescriptor>
    ? ModifierConfig<Descriptor["value"]>
    : never;
