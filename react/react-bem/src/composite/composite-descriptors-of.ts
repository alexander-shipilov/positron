import type { ReactPropsKeyOf } from "@positron/react-core";
import type { ReactProps } from "@positron/react-core";

import type { CompositeDescriptorOf } from "./composite-descriptor-of";
import type { CompositeKey } from "./composite-key";

/**
 * The {@link CompositeDescriptorsOf} type return a `Record` containing
 * all composite descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect composite descriptors' data from.
 *
 * @public
 */
export type CompositeDescriptorsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as CompositeKey<
    TProps,
    Key
  >]: CompositeDescriptorOf<TProps[Key]>;
};
