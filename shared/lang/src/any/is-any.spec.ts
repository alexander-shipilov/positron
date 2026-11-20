import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "./any";
import type { IsAny } from "./is-any";

describe("type IsAny<T>", () => {
  it("should be `true` if `T` is `any`", () => {
    expectTypeOf<IsAny<Any>>().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is `never`", () => {
    expectTypeOf<IsAny<never>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `unknown`", () => {
    expectTypeOf<IsAny<unknown>>().toEqualTypeOf<false>();
  });
});
