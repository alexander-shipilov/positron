import { expectTypeOf } from "expect-type";
import { ArrayLast } from "./ArrayLast";

describe("ArrayLast<T>", () => {
  it("should be the last type of the given tuple type", () => {
    expectTypeOf<ArrayLast<[number, string]>>().toEqualTypeOf<string>();
  });

  it("should be `never` if `T` is empty tuple type", () => {
    expectTypeOf<ArrayLast<[]>>().toBeNever();
  });

  it("should be a type of the given array type", () => {
    expectTypeOf<ArrayLast<string[]>>().toEqualTypeOf<string>();
  });

  it("should be `never` if `T` is not an array / tuple type", () => {
    expectTypeOf<ArrayLast<string>>().toBeNever();
  });
});
