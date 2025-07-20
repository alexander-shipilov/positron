import type { ReactAnyProps, ReactPropsKeyOf } from "@positron/react-core";

import type { Descriptor, DescriptorNominal } from "../descriptor";

import type { ElementType } from "./element-type";

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
  TProps extends ReactAnyProps,
  TKey extends ReactPropsKeyOf<TProps>,
> =
  TProps[TKey] extends DescriptorNominal<Descriptor<ElementType>>
    ? TKey
    : never;
