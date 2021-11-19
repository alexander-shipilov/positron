import { expectTypeOf } from "expect-type";
import { Mandatory } from "../Mandatory";

describe("Mandatory<T>", () => {
  it("should exclude `undefined` from `T`", () => {
    expectTypeOf<Mandatory<string | undefined>>().toEqualTypeOf<string>();
    expectTypeOf<Mandatory<undefined>>().toBeNever();
  });
});
