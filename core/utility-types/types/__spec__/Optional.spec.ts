import { expectTypeOf } from "expect-type";
import { Optional } from "../Optional";

describe("Optional<T>", () => {
  it("should add `undefined` type to `T`", () => {
    expectTypeOf<Optional<string>>().toEqualTypeOf<string | undefined>();
  });
});
