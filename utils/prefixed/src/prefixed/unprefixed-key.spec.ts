import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnprefixedKey } from "./unprefixed-key";

describe("UnprefixedKey<P, K>", () => {
  type P = "foo";

  it("should strip prefix `P` from the prefixed `K`", () => {
    type P1 = "foo";
    type K1 = "foo-bar";
    expectTypeOf<UnprefixedKey<P1, K1>>().toEqualTypeOf<"bar">();

    type P2 = "foo-bar";
    type K2 = "foo-bar-baz";
    expectTypeOf<UnprefixedKey<P2, K2>>().toEqualTypeOf<"baz">();

    type P3 = "foo";
    type K3 = "foo-bar-baz";
    expectTypeOf<UnprefixedKey<P3, K3>>().toEqualTypeOf<"bar-baz">();
  });

  it("should return `K` if `K` has no the specified `P`", () => {
    type K1 = "foo";
    expectTypeOf<UnprefixedKey<P, K1>>().toEqualTypeOf<K1>();

    type K2 = "bar";
    expectTypeOf<UnprefixedKey<P, K2>>().toEqualTypeOf<K2>();

    type K3 = "bar-baz";
    expectTypeOf<UnprefixedKey<P, K3>>().toEqualTypeOf<K3>();
  });

  it("should return `K` if `K` is a `string`", () => {
    type K = string;
    expectTypeOf<UnprefixedKey<P, K>>().toEqualTypeOf<K>();
  });

  it("should return `K` if `K` is a `number`", () => {
    type K = number;
    expectTypeOf<UnprefixedKey<P, K>>().toEqualTypeOf<K>();
  });

  it("should return `K` if `K` is a `symbol`", () => {
    type K1 = symbol;
    expectTypeOf<UnprefixedKey<P, K1>>().toEqualTypeOf<K1>();

    type K2 = typeof Symbol.iterator;
    expectTypeOf<UnprefixedKey<P, K2>>().toEqualTypeOf<K2>();
  });
});
