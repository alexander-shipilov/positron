import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { DescribedNominal } from "../descriptor2";
import type { ValueDescriptor } from "../value/value-descriptor";

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
> = TProps[TKey] extends DescribedNominal<ValueDescriptor> ? TKey : never;
