import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedKey } from "./prefixed-key";

describe("type PrefixedKey<P, K>", () => {
  type P = "foo";

  it("should add prefix `P` to the key `K`", () => {
    type P1 = "foo";
    type K1 = "bar";
    expectTypeOf<PrefixedKey<P1, K1>>().toEqualTypeOf<`${P1}-${K1}`>();

    type P2 = "foo-bar";
    type K2 = "baz";
    expectTypeOf<PrefixedKey<P2, K2>>().toEqualTypeOf<`${P2}-${K2}`>();

    type P3 = "foo";
    type K3 = "bar-baz";
    expectTypeOf<PrefixedKey<P3, K3>>().toEqualTypeOf<`${P3}-${K3}`>();

    type P4 = "foo";
    type K4 = 1;
    expectTypeOf<PrefixedKey<P4, 1>>().toEqualTypeOf<`${P4}-${K4}`>();
  });

  it("should be `${P}-${number}` if `K` is `number`", () => {
    expectTypeOf<PrefixedKey<P, number>>().toEqualTypeOf<`${P}-${number}`>();
  });

  it("should be `${P}-${string}` if `K` is `string` or omitted", () => {
    expectTypeOf<PrefixedKey<P>>().toEqualTypeOf<`${P}-${string}`>();
  });
});
