import type { DescriptorPick } from "../descriptor";

import type { ElementType } from "./element-type";

export type ElementPick<TProps> = DescriptorPick<TProps, ElementType>;
