import { expectTypeOf } from "expect-type";
import { Unprefix } from "./Unprefix";

describe("Unprefix", () => {
  it("should remove given prefix from passed string types", () => {
    expectTypeOf<Unprefix<"foo", "foo-bar">>().toEqualTypeOf<"bar">();

    expectTypeOf<Unprefix<"foo", "foo-bar" | "foo-baz">>().toEqualTypeOf<
      "bar" | "baz"
    >();
  });

  it("should leave type unchanged if it has no specified prefix", () => {
    expectTypeOf<Unprefix<"foo", "bar">>().toEqualTypeOf<"bar">();
    expectTypeOf<Unprefix<"foo", "bar" | "baz">>().toEqualTypeOf<
      "bar" | "baz"
    >();
  });
});
