import { expectTypeOf } from "expect-type";
import { Literal } from "../Literal";

describe("Literal", () => {
  it("should be a union of string, number, bigint, boolean, undefined, and null", () => {
    expectTypeOf<Literal>().toEqualTypeOf<
      string | number | bigint | boolean | undefined | null
    >();
  });

  it("test", () => {
    type L<T extends Literal> = `test-${T}`;

    expectTypeOf<L<1>>().toEqualTypeOf<"test-1">();
    expectTypeOf<
      L<typeof Number.POSITIVE_INFINITY>
    >().toEqualTypeOf<"test-Infinity">();

    expectTypeOf<L<1n>>().toEqualTypeOf<"test-1">();
    expectTypeOf<L<true>>().toEqualTypeOf<"test-true">();
    expectTypeOf<L<false>>().toEqualTypeOf<"test-false">();
    expectTypeOf<L<null>>().toEqualTypeOf<"test-null">();
    expectTypeOf<L<1n>>().toEqualTypeOf<"test-1">();
    expectTypeOf<L<1n>>().toEqualTypeOf<"test-1">();
  });
});
