import type { ReactPropsKeyOf } from "@positron/react-core";
import type { ReactProps } from "@positron/react-core";

import type { ModifierConfigOf } from "./modifier-config-of";
import type { ModifierKey } from "./modifier-key";

/**
 * The {@link ModifierConfigsOf} type returns the `Record` tha contains all
 * modifier descriptor configs for the specified `TProps`.
 *
 * @typeParam TProps - Properties to collect modifier descriptor configs from.
 *
 * @public
 */
export type ModifierConfigsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as ModifierKey<
    TProps,
    Key
  >]: ModifierConfigOf<TProps[Key]>;
};
