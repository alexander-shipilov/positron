import { expectTypeOf } from "expect-type";
import { Primitive } from "./Primitive";

describe("Primitive", () => {
  it("should be union of string, number, bigint, boolean, undefined, symbol, and null", () => {
    expectTypeOf<Primitive>().toEqualTypeOf<
      string | number | bigint | boolean | undefined | symbol | null
    >();
  });
});
