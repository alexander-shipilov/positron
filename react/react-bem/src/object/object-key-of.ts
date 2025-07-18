import type { PropertyNameOf } from "@positron/core";

import type { ObjectPick } from "./object-pick";

export type ObjectKeyOf<TProps> = PropertyNameOf<ObjectPick<TProps>>;
