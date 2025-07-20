import type { ReactProps } from "@positron/react-core";
import type { ReactPropsKeyOf } from "@positron/react-core";

import type { DescriptorKey } from "./descriptor-key";
import type { DescriptorOf } from "./descriptor-of";

/**
 * The {@link DescriptorsOf} type return the `Record` that contains all
 * descriptors for the specified `TProps`
 *
 * @typeParam TProps - Properties to collect descriptors' data.
 *
 * @public
 */
export type DescriptorsOf<TProps extends ReactProps> = {
  [Key in ReactPropsKeyOf<TProps> as DescriptorKey<TProps, Key>]: DescriptorOf<
    TProps[Key]
  >;
};
