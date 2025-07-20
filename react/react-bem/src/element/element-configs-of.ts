import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { ElementConfigOf } from "./element-config-of";
import type { ElementKey } from "./element-key";

/**
 * The {@link ElementConfigsOf} type returns `Record` that contains the all
 * descriptor configs for the specified `TProps`.
 *
 * @typeParam TProps - Properties to collect element descriptors' data from.
 *
 * @public
 */
export type ElementConfigsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as ElementKey<TProps, Key>]: ElementConfigOf<
    TProps[Key]
  >;
};
