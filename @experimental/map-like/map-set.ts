import type { Map_ } from "./map-";
import type { MapEntry } from "./map-entry";
import type { MapType } from "./map-type";

/**
 */
export type MapSet<TMap extends MapType, TKey, TValue> = Map_<
  MapEntry<TKey, TValue>
> &
  TMap;
