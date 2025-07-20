import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { ModifierDescriptorOf } from "./modifier-descriptor-of";
import type { ModifierKey } from "./modifier-key";

/**
 * The {@link ModifierDescriptorsOf} type return the `Record` that contains all
 * modifier descriptors for the specified `TProps`.
 *
 * @typeParam TProps - Properties to collect modifier descriptors from.
 *
 * @public
 */
export type ModifierDescriptorsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as ModifierKey<
    TProps,
    Key
  >]: ModifierDescriptorOf<TProps[Key]>;
};
