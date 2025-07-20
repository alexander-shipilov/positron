import type { TypedObject } from "@positron/core";

import type { ReactPropsKey } from "./react-props-key";

/**
 * The {@link ReactProps} represents a `React` properties accepted by the
 * {@link ReactComponent}.
 *
 * @public
 */
export type ReactProps<
  TValue = unknown,
  TKey extends ReactPropsKey = ReactPropsKey,
> = TypedObject<TValue, TKey>;
