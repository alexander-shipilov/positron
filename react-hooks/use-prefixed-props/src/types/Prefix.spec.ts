import { expectTypeOf } from "expect-type";
import { Prefix } from "./Prefix";

describe("Prefix", () => {
  it("should add prefix to the passed string", () => {
    expectTypeOf<Prefix<"foo", "bar">>().toEqualTypeOf<"foo-bar">();

    expectTypeOf<Prefix<"foo", "bar" | "baz">>().toEqualTypeOf<
      "foo-bar" | "foo-baz"
    >();
  });
});
