import type { MapEntries } from "./map-entries";
import type { MapType } from "./map-type";

export type MapGet<TMap extends MapType, TKey> =
  MapEntries<TMap> extends [TKey, infer TValue] ? TValue : never;
