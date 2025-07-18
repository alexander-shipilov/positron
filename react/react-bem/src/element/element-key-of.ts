import type { PropertyNameOf } from "@positron/core";

import type { ElementPick } from "./element-pick";

export type ElementKeyOf<TProps> = PropertyNameOf<ElementPick<TProps>>;
