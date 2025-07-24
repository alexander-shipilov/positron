import type { MapEntries } from "./map-entries";
import type { MapKeys } from "./map-keys";
import type { MapSet } from "./map-set";
import type { MapType } from "./map-type";
import type { MapValues } from "./map-values";

declare function expect<V>(v: V): void;


type X0 = MapType<[[1n, 2]]>;
type X1 = MapSet<X0, 1, 1>;
type X2 = MapSet<X1, 2, 2>;
type X3 = MapSet<X2, 3, 3>;
type X4 = MapSet<X3, 4n, 4>;

declare const u: unknown;

expect<MapEntries<X0>>(u as [never, never]);
expect<MapValues<X0>>(u as never);
expect<MapKeys<X0>>(u as never);

expect<MapValues<X1>>(u as 1);
expect<MapKeys<X1>>(u as 1);

expect<MapEntries<X2>>(u as [1, 1] | [2, 2]);
expect<MapValues<X2>>(u as 1 | 2);

expect<MapEntries<X3>>(u as [1, 1] | [2, 2] | [3, 3]);
expect<MapValues<X3>>(u as 1 | 2 | 3);

expect<MapEntries<X4>>(u as [1, 1] | [2, 2] | [3, 3] | [4n, 4]);
expect<MapValues<X4>>(u as 1 | 2 | 3 | 4);
