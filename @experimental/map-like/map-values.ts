import type { MapEntries } from "./map-entries";
import type { MapType } from "./map-type";

/**
 */
export type MapValues<TMap extends MapType> =
  MapEntries<TMap> extends [unknown, infer V] ? V : never;
