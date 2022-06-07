import { expectTypeOf } from "expect-type";
import { ArrayJoin } from "./ArrayJoin";

describe("ArrayJoin<A, S>", () => {
  it('should be `""` if `T` is empty tuple type', () => {
    expectTypeOf<ArrayJoin<[], "-">>().toEqualTypeOf<"">();
  });

  it("should return string type", () => {
    expectTypeOf<ArrayJoin<["foo"], "-">>().toEqualTypeOf<"foo">();
    expectTypeOf<ArrayJoin<[1], "-">>().toEqualTypeOf<"1">();
    expectTypeOf<ArrayJoin<[1n], "-">>().toEqualTypeOf<"1">();
    expectTypeOf<ArrayJoin<[true], "-">>().toEqualTypeOf<"true">();
    expectTypeOf<ArrayJoin<[false], "-">>().toEqualTypeOf<"false">();
    expectTypeOf<ArrayJoin<[null], "-">>().toEqualTypeOf<"null">();
    expectTypeOf<ArrayJoin<[undefined], "-">>().toEqualTypeOf<"undefined">();
  });

  it("should return joined type", () => {
    expectTypeOf<
      ArrayJoin<["foo", 1, 1n, true, false, null, undefined], ".">
    >().toEqualTypeOf<"foo.1.1.true.false.null.undefined">();
  });

  it("should be `never` if `A` contains not a literal type", () => {
    expectTypeOf<ArrayJoin<[never], "">>().toBeNever();
    expectTypeOf<ArrayJoin<[symbol], "">>().toBeNever();
  });

  it("should be `never` if `S` is not a literal type", () => {
    expectTypeOf<ArrayJoin<[], never>>().toBeNever();
    expectTypeOf<ArrayJoin<[], symbol>>().toBeNever();
  });
});
