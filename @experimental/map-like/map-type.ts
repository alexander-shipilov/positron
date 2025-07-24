import type { Map_ } from "./map-";
import type { MapEntry } from "./map-entry";

/**
 */
export type MapType<TEntries extends readonly MapEntry[] = []> = MapType_<
  [...TEntries],
  Map_
>;

/**
 * @internal
 */
type MapType_<
  TEntries extends MapEntry[],
  TMap extends Map_,
> = TEntries extends [
  infer First extends MapEntry,
  ...infer Tail extends MapEntry[],
]
  ? MapType_<Tail, Map_<First> & TMap>
  : TEntries extends [
        ...infer Head extends MapEntry[],
        infer TLast extends MapEntry,
      ]
    ? MapType_<Head, Map_<TLast> & TMap>
    : TEntries extends []
      ? TMap
      : TMap & TMap[number];
