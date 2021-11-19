import { expectTypeOf } from "expect-type";
import { PrefixedKey } from "./PrefixedKey";

describe("PrefixedKey", () => {
  it("should add prefix to the passed string key", () => {
    expectTypeOf<PrefixedKey<"foo", "foo-bar">>().toEqualTypeOf<"foo-bar">();
  });

  it("should omit unprefixed types", () => {
    expectTypeOf<PrefixedKey<"foo", number | symbol | string>>().toBeNever();
  });
});
