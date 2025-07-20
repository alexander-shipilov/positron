import type { ReactProps } from "@positron/react-core";
import type { ReactPropsKeyOf } from "@positron/react-core";

import type { ElementDescriptorsOf } from "./element-descriptors-of";

export type ElementKeyOf<TProps extends ReactProps> = ReactPropsKeyOf<
  ElementDescriptorsOf<TProps>
>;
