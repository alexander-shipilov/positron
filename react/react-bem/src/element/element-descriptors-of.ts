import type { ReactProps } from "@positron/react-core";
import type { ReactPropsKeyOf } from "@positron/react-core";

import type { ElementDescriptorOf } from "./element-descriptor-of";
import type { ElementKey } from "./element-key";

/**
 * The {@link ElementDescriptorsOf} type return a `Record` that contains the all
 * element descriptors of the specified `TProps`
 *
 * @typeParam TProps - Properties to collect element descriptors from.
 *
 * @public
 */
export type ElementDescriptorsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as ElementKey<
    TProps,
    Key
  >]: ElementDescriptorOf<TProps[Key]>;
};
