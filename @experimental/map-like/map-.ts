import type { MapEntry } from "./map-entry";

/**
 * @internal
 */
export type Map_<M extends MapEntry = MapEntry<never, never>> =
  | [MapEntry, M]
  | [M, MapEntry];
