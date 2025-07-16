import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedKey } from "src/types";

describe("PrefixedKey<TKey, TPrefix>", () => {
  it("should add string literal `TPrefix` to string literal `TKey`", () => {
    expectTypeOf<PrefixedKey<"bar", "foo">>().toEqualTypeOf<"foo-bar">();
    expectTypeOf<PrefixedKey<"bar" | "ted", "foo">>().toEqualTypeOf<
      "foo-bar" | "foo-ted"
    >();
    expectTypeOf<PrefixedKey<"bar" | "ted", "baz" | "foo">>().toEqualTypeOf<
      "baz-bar" | "baz-ted" | "foo-bar" | "foo-ted"
    >();
  });

  it("should leave key unchanged if `TKey` does not extends `string`", () => {
    const $symbol = Symbol("symbol");

    expectTypeOf<PrefixedKey<never, "foo">>().toEqualTypeOf<never>();
    expectTypeOf<PrefixedKey<1, "foo">>().toEqualTypeOf<1>();
    expectTypeOf<PrefixedKey<typeof $symbol, "foo">>().toEqualTypeOf<
      typeof $symbol
    >();
  });
});
