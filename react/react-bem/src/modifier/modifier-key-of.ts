import type { ReactProps, ReactPropsKeyOf } from "@positron/react-core";

import type { ModifierDescriptorsOf } from "./modifier-descriptors-of";

export type ModifierKeyOf<TProps extends ReactProps> = ReactPropsKeyOf<
  ModifierDescriptorsOf<TProps>
>;
