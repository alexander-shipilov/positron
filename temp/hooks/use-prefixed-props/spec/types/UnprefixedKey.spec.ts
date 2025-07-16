import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UnprefixedKey } from "src/types";

describe("UnprefixedKey<TKey, TPrefix>", () => {
  it("should remove string literal `TPrefix` from string literal `TKey`", () => {
    expectTypeOf<UnprefixedKey<"foo-bar", "foo">>().toEqualTypeOf<"bar">();
  });

  it("should return `never` if `TKey` has no `TPrefix`", () => {
    expectTypeOf<UnprefixedKey<"foo-bar", "ted">>().toBeNever();
  });

  it("should return `TKey` if `TKey` or `TPrefix` is not string literal", () => {
    expectTypeOf<UnprefixedKey<"foo-bar", 1>>().toEqualTypeOf<"foo-bar">();
    expectTypeOf<UnprefixedKey<"foo-bar", symbol>>().toEqualTypeOf<"foo-bar">();
    expectTypeOf<UnprefixedKey<symbol, "foo">>().toEqualTypeOf<symbol>();
    expectTypeOf<UnprefixedKey<1, "foo">>().toEqualTypeOf<1>();
  });
});
