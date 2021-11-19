import { expectTypeOf } from "expect-type";
import { PrefixKey } from "./PrefixKey";

describe("PrefixKey", () => {
  it("should add prefix to the passed string key", () => {
    expectTypeOf<PrefixKey<"foo", "bar">>().toEqualTypeOf<"foo-bar">();

    expectTypeOf<
      PrefixKey<"foo", keyof { bar: string; baz: string }>
    >().toEqualTypeOf<"foo-bar" | "foo-baz">();
  });

  it("should return same type fon non-string types", () => {
    expectTypeOf<PrefixKey<"foo", 1>>().toEqualTypeOf<1>();
    expectTypeOf<PrefixKey<"foo", symbol>>().toEqualTypeOf<symbol>();
  });
});
