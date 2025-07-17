import type { Any } from "@positron/core";
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedKey } from "./prefixed-key";

describe("PrefixedKey<P, K>", () => {
  type P = "foo";

  it("should strip prefix `P` from the prefixed `K`", () => {
    type P1 = "foo";
    type K1 = "bar";
    expectTypeOf<PrefixedKey<P1, K1>>().toEqualTypeOf<"foo-bar">();

    type P2 = "foo-bar";
    type K2 = "baz";
    expectTypeOf<PrefixedKey<P2, K2>>().toEqualTypeOf<"foo-bar-baz">();

    type P3 = "foo";
    type K3 = "bar-baz";
    expectTypeOf<PrefixedKey<P3, K3>>().toEqualTypeOf<"foo-bar-baz">();
  });

  it("`should return `${P}-${string}` if `K` is a `string``", () => {
    type K = string;
    expectTypeOf<PrefixedKey<P, K>>().toEqualTypeOf<`${P}-${string}`>();
  });

  it("should return `number` if `K` is a `number`", () => {
    type K1 = number;
    expectTypeOf<PrefixedKey<P, K1>>().toEqualTypeOf<K1>();

    type K2 = 1;
    expectTypeOf<PrefixedKey<P, K2>>().toEqualTypeOf<K2>();
  });

  it("should return `symbol` if `K` is a `symbol`", () => {
    type K1 = symbol;
    expectTypeOf<PrefixedKey<P, K1>>().toEqualTypeOf<K1>();

    type K2 = typeof Symbol.iterator;
    expectTypeOf<PrefixedKey<P, K2>>().toEqualTypeOf<K2>();
  });

  it("should leave `any` and `never` unchanged", () => {
    expectTypeOf<PrefixedKey<P, Any>>().toBeAny();
    expectTypeOf<PrefixedKey<P, never>>().toBeNever();
  });
});
