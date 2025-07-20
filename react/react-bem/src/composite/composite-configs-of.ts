import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { CompositeConfigOf } from "./composite-config-of";
import type { CompositeKey } from "./composite-key";

/**
 * The {@link CompositeConfigsOf} type returns an object containing
 * composites config for the specified `TProps`.
 *
 * @typeParam TProps - Properties to collect composite descriptors' data from.
 *
 * @public
 */
export type CompositeConfigsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as CompositeKey<
    TProps,
    Key
  >]: CompositeConfigOf<TProps[Key]>;
};
