import { expectTypeOf } from "expect-type";
import { UnprefixKey } from "./UnprefixKey";

describe("UnprefixKey", () => {
  it("should add prefix to the passed string key", () => {
    expectTypeOf<UnprefixKey<"foo", "foo-bar">>().toEqualTypeOf<"bar">();
    expectTypeOf<UnprefixKey<"foo", "foo-bar" | "foo-baz">>().toEqualTypeOf<
      "bar" | "baz"
    >();
  });

  it("should leave type unchanged if it has no specified prefix", () => {
    expectTypeOf<UnprefixKey<"foo", "bar">>().toEqualTypeOf<"bar">();
    expectTypeOf<UnprefixKey<"foo", 1>>().toEqualTypeOf<1>();
    expectTypeOf<UnprefixKey<"foo", symbol>>().toEqualTypeOf<symbol>();
  });
});
