import type { ReactProps } from "@positron/react-core";
import type { ReactPropsKeyOf } from "@positron/react-core";

import type { CompositeDescriptorsOf } from "./composite-descriptors-of";

export type CompositeKeyOf<TProps extends ReactProps> = ReactPropsKeyOf<
  CompositeDescriptorsOf<TProps>
>;
