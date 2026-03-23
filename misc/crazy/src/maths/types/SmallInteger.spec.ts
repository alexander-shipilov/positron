import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { SmallInteger } from "./SmallInteger";

describe("SmallInteger", () => {
  it("should match a `number`", () => {
    expectTypeOf<SmallInteger>().toMatchTypeOf<number>();
  });

  it("should not be a `number`", () => {
    expectTypeOf<SmallInteger>().not.toEqualTypeOf<number>();
    expectTypeOf<SmallInteger>().not.toEqualTypeOf(1);
  });
});
