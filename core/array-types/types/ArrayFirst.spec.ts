import { expectTypeOf } from "expect-type";
import { ArrayFirst } from "./ArrayFirst";

describe("ArrayFirst<T>", () => {
  it("should be the first type of the given tuple type", () => {
    expectTypeOf<ArrayFirst<[number, string]>>().toEqualTypeOf<number>();
  });

  it("should be a type of the given array type", () => {
    expectTypeOf<ArrayFirst<string[]>>().toEqualTypeOf<string>();
  });

  it("should be `never` if `T` is empty tuple type", () => {
    expectTypeOf<ArrayFirst<[]>>().toBeNever();
  });

  it("should be `never` if `T` is not an array / tuple type", () => {
    expectTypeOf<ArrayFirst<string>>().toBeNever();
  });
});
