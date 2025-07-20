import type { PropertyKeyOf } from "@positron/core";

import type { ReactPropsKey } from "./react-props-key";

/**
 * The {@link ReactPropsKeyOf} type constructs a union of the
 * passed type `TValue` key .
 *
 * @param TValue - The type to get keys of
 * @param TKey - An optional type to restrict the result
 *
 * @public
 */
export type ReactPropsKeyOf<
  TValue,
  TKey extends ReactPropsKey = ReactPropsKey,
> = PropertyKeyOf<TValue, TKey>;
