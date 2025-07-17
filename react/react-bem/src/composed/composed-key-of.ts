import type { ComposedPick } from "./composed-pick";

export type ComposedKeyOf<TProps> = keyof ComposedPick<TProps>;
