import type { ReactPropsKeyOf } from "@positron/react-core";
import type { ReactProps } from "@positron/react-core/src";

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
  TProps extends ReactProps,
  TKey extends ReactPropsKeyOf<TProps>,
> =
  TProps[TKey] extends DescriptorNominal<Descriptor<ElementType>>
    ? TKey
    : never;
