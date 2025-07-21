import type { DescribedNominal } from "../descriptor2";
import type { ElementDescriptor } from "../element-descriptor/element-descriptor";

import type { ElementConfig } from "./element-config";

/**
 * The {@link ElementConfigOf} creates an element config from the passed
 * `TValue`.
 *
 * @typeParam TValue - The value to get element config for.
 *
 * @internal
 */
export type ElementConfigOf<TValue> =
  TValue extends DescribedNominal<infer Descriptor extends ElementDescriptor>
    ? ElementConfig<Descriptor["value"], Descriptor["props"]>
    : never;
