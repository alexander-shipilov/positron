import type { ElementPick } from "./element-pick";

export type ElementKeyOf<TProps> = keyof ElementPick<TProps>;
