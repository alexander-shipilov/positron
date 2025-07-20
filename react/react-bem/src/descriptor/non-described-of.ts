import type { ReactProps } from "@positron/react-core";

import type { DescriptorKeyOf } from "./descriptor-key-of";

/**
 * The {@link NonDescribedOf} type returns all non-described properties of the
 * passed `TProps`.
 *
 * @typeParam TProps - The object to collect non-described properties from.
 *
 * @public
 */
export type NonDescribedOf<TProps extends ReactProps> = Omit<
  TProps,
  DescriptorKeyOf<TProps>
>;
