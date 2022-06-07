import { expectTypeOf } from "expect-type";
import { ArrayType } from "./ArrayType";

describe("ArrayType<T>", () => {
  it("should be a type of the given array / tuple type", () => {
    expectTypeOf<ArrayType<string[]>>().toEqualTypeOf<string>();

    expectTypeOf<ArrayType<[number, string]>>().toEqualTypeOf<
      number | string
    >();
  });

  it("should be `never` if `T` is empty tuple type", () => {
    expectTypeOf<ArrayType<[]>>().toBeNever();
  });

  it("should be `never` if `T` is neither an array nor tuple type", () => {
    expectTypeOf<ArrayType<string>>().toBeNever();
  });
});
