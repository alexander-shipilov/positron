import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { CompositeDescriptorsOf } from "./composite-descriptors-of";

export type CompositeKeyOf<TProps extends ReactProps> = ReactPropsKeyOf<
  CompositeDescriptorsOf<TProps>
>;
