import type { DescriptorNominal } from "../descriptor";

import type { ElementConfig } from "./element-config";
import type { ElementDescriptor } from "./element-descriptor";

/**
 * The {@link ElementConfigOf} creates an element config from the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get element config for.
 *
 * @internal
 */
export type ElementConfigOf<TValue> =
  TValue extends DescriptorNominal<infer Descriptor extends ElementDescriptor>
    ? ElementConfig<Descriptor["value"], Descriptor["props"]>
    : never;
