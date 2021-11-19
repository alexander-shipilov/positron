import { expectTypeOf } from "expect-type";
import { Key } from "../Key";

describe("Key", () => {
  it("should be union of number, string, and symbol", () => {
    expectTypeOf<Key>().toEqualTypeOf<number | string | symbol>();
  });
});
