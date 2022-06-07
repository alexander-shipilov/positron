import { expectTypeOf } from "expect-type";
import { ArrayTail } from "./ArrayTail";

describe("ArrayTail<T>", () => {
  it("should return tuple type of the given tuple tail", () => {
    expectTypeOf<ArrayTail<[number, string]>>().toEqualTypeOf<[string]>();
    expectTypeOf<ArrayTail<[number, string, boolean]>>().toEqualTypeOf<
      [string, boolean]
    >();
  });

  it("should be `T` if `T` is an array type", () => {
    expectTypeOf<ArrayTail<string[]>>().toEqualTypeOf<string[]>();
  });

  it("should be `never[]` if `T` is empty tuple type", () => {
    expectTypeOf<ArrayTail<[]>>().toEqualTypeOf<never[]>();
  });

  it("should be `never` if `T` is neither an array nor tuple type", () => {
    expectTypeOf<ArrayTail<string>>().toBeNever();
  });
});
