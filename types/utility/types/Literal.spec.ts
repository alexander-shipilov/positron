import { expectTypeOf } from "expect-type";
import { Literal } from "./Literal";

describe("Literal", () => {
  it("should be a union of string, number, bigint, boolean, undefined, and null", () => {
    expectTypeOf<Literal>().toEqualTypeOf<
      string | number | bigint | boolean | undefined | null
    >();
  });
});
