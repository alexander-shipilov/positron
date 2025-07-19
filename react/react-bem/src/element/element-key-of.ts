import type { PropertyNameOf } from "@positron/core";

import type { PickElements } from "./pick-elements";

export type ElementKeyOf<TProps> = PropertyNameOf<PickElements<TProps>>;
