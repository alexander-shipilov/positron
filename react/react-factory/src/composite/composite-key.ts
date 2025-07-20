import type { ReactPropsKeyOf, ReactProps } from "@positron/react-core";

import type { DescriptorNominal } from "../descriptor";

import type { CompositeDescriptor } from "./composite-descriptor";

/**
 * The {@link CompositeKey} return the passed `TKey` if the property keyed by
 * this key is described by composite descriptor or `never` otherwise.
 *
 * @typeParam TProps - The properties containing the given `TKey`.
 * @typeParam TKey - The key
 *
 * @internal
 */
export type CompositeKey<
  TProps extends ReactProps,
  TKey extends ReactPropsKeyOf<TProps>,
> = TProps[TKey] extends DescriptorNominal<CompositeDescriptor> ? TKey : never;
