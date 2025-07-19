import type { PropertyNameOf } from "@positron/core";

import type { PickComposites } from "./pick-composites";

export type CompositeKeyOf<TProps> = PropertyNameOf<PickComposites<TProps>>;
