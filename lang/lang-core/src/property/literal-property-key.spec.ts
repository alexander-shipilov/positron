import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { LiteralPropertyKey } from "./literal-property-key";

describe("LiteralPropertyKey<T>", () => {
  it("should return literal keys of `T`", () => {
    type $ = typeof Symbol.iterator;

    expectTypeOf<LiteralPropertyKey<PropertyKey>>().toBeNever();
    expectTypeOf<LiteralPropertyKey<number | string>>().toBeNever();
    expectTypeOf<LiteralPropertyKey<string>>().toBeNever();

    expectTypeOf<LiteralPropertyKey<$ | string | 1>>().toEqualTypeOf<$ | 1>();
    expectTypeOf<LiteralPropertyKey<symbol | "a" | 1>>().toEqualTypeOf<
      "a" | 1
    >();
    expectTypeOf<LiteralPropertyKey<$ | number | "a">>().toEqualTypeOf<
      $ | "a"
    >();
  });
});
