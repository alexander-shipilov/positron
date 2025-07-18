import type { PropertyNameOf } from "@positron/core";

import type { DescriptorPick } from "./descriptor-pick";

export type DescriptorKeyOf<TProps> = PropertyNameOf<DescriptorPick<TProps>>;
