import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { IsNever } from "./is-never";

describe("type IsNever<T>", () => {
  it("should be `true` if `T` is `never`", () => {
    expectTypeOf<IsNever<never>>().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is `any`", () => {
    expectTypeOf<IsNever<Any>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `unknown`", () => {
    expectTypeOf<IsNever<unknown>>().toEqualTypeOf<false>();
  });
});
