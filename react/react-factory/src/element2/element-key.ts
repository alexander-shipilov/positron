import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { Descriptor, DescribedNominal } from "../descriptor2";
import type { ElementDescriptorType } from "../element/element-descriptor-type";

/**
 * The {@link ElementKey} return the passed `TKey` if the property keyed by
 * this key is described by element descriptor or `never` otherwise.
 *
 * @typeParam TProps - The properties containing the given `TKey`.
 * @typeParam TKey - The key
 *
 * @internal
 */
export type ElementKey<
  TProps extends ReactProps,
  TKey extends ReactPropsKeyOf<TProps>,
> =
  TProps[TKey] extends DescribedNominal<Descriptor<ElementDescriptorType>>
    ? TKey
    : never;
