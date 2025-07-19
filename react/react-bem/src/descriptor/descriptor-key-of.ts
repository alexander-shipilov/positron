import type { PropertyNameOf } from "@positron/core";

import type { PickDescriptors } from "./pick-descriptors";

export type DescriptorKeyOf<TProps> = PropertyNameOf<PickDescriptors<TProps>>;
