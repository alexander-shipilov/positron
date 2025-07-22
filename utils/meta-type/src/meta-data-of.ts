import type { MetaType } from "./meta-type";

export type MetaDataOf<TType, TTag extends symbol> =
  TType extends MetaType<unknown, TTag, infer Value> ? Value : never;
