import type { Map_ } from "./map-";
import type { MapType } from "./map-type";

/**
 */
export type MapEntries<TMap extends MapType> =
  TMap extends Map_<infer I> ? I : never;
