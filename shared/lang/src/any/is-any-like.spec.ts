import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "./any";
import type { IsAnyLike } from "./is-any-like";

describe("type IsAnyLike<T>", () => {
  it("should be `true` if `T` is `any` or `never`", () => {
    expectTypeOf<IsAnyLike<Any>>().toEqualTypeOf<true>();
    expectTypeOf<IsAnyLike<never>>().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is `unknown`", () => {
    expectTypeOf<IsAnyLike<unknown>>().toEqualTypeOf<false>();
  });
});
