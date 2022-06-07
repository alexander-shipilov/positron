import { expectTypeOf } from "expect-type";
import { ArrayHead } from "./ArrayHead";

describe("ArrayHead<T>", () => {
  it("should return tuple type of the given tuple head", () => {
    expectTypeOf<ArrayHead<[number, string]>>().toEqualTypeOf<[number]>();
    expectTypeOf<ArrayHead<[number, string, boolean]>>().toEqualTypeOf<
      [number, string]
    >();
  });

  it("should be `never[]` if `T` is empty tuple type", () => {
    expectTypeOf<ArrayHead<[]>>().toEqualTypeOf<never[]>();
  });

  it("should be a type of the given array type", () => {
    expectTypeOf<ArrayHead<string[]>>().toEqualTypeOf<string[]>();
  });

  it("should be `never` if `T` is neither an array nor tuple type", () => {
    expectTypeOf<ArrayHead<string>>().toBeNever();
  });
});
