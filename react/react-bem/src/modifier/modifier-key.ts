import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { DescriptorNominal } from "../descriptor";

import type { ModifierDescriptor } from "./modifier-descriptor";

/**
 * The {@link ModifierKey} return the passed `TKey` if the property keyed by
 * this key is described by modifier descriptor or `never` otherwise.
 *
 * @typeParam TProps - The properties containing the given `TKey`.
 * @typeParam TKey - The key
 *
 * @internal
 */
export type ModifierKey<
  TProps extends ReactProps,
  TKey extends ReactPropsKeyOf<TProps>,
> = TProps[TKey] extends DescriptorNominal<ModifierDescriptor> ? TKey : never;
