import type { Metatype } from "../metatype";

export type MetadataOf<TType, TTag extends PropertyKey> =
  TType extends Metatype<unknown, TTag, infer Value> ? Value : never;
