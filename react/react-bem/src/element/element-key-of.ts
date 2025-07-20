import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { ElementDescriptorsOf } from "./element-descriptors-of";

export type ElementKeyOf<TProps extends ReactProps> = ReactPropsKeyOf<
  ElementDescriptorsOf<TProps>
>;
