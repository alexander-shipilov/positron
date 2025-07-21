import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { DescriptorsOf } from "./descriptors-of";

export type DescriptorKeyOf<TProps extends ReactProps> = ReactPropsKeyOf<
  DescriptorsOf<TProps>
>;
