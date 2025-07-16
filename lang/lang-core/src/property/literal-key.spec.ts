import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { LiteralKey } from "./literal-key";

describe("LiteralKey<T>", () => {
  it("should return literal keys of `T`", () => {
    type $ = typeof Symbol.iterator;

    expectTypeOf<LiteralKey<PropertyKey>>().toBeNever();
    expectTypeOf<LiteralKey<number | string>>().toBeNever();
    expectTypeOf<LiteralKey<string>>().toBeNever();

    expectTypeOf<LiteralKey<$ | string | 1>>().toEqualTypeOf<$ | 1>();
    expectTypeOf<LiteralKey<symbol | "a" | 1>>().toEqualTypeOf<"a" | 1>();
    expectTypeOf<LiteralKey<$ | number | "a">>().toEqualTypeOf<$ | "a">();
  });
});
