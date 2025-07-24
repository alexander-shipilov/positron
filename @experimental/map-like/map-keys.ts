import type { MapEntries } from "./map-entries";
import type { MapType } from "./map-type";

/**
 */
export type MapKeys<TMap extends MapType> =
  MapEntries<TMap> extends [infer K, unknown] ? K : never;
