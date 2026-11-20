import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { IsBigintLiteral } from "./is-bigint-literal";

describe("type IsBigintLiteral<T>", () => {
  it("should be `true` if `T` is a bigint literal", () => {
    expectTypeOf<IsBigintLiteral<-1n>>().toEqualTypeOf<true>();
    expectTypeOf<IsBigintLiteral<0n>>().toEqualTypeOf<true>();
    expectTypeOf<IsBigintLiteral<1n>>().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is not a bigint literal", () => {
    expectTypeOf<IsBigintLiteral<bigint>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `never` or `any`", () => {
    expectTypeOf<IsBigintLiteral<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigintLiteral<Any>>().toEqualTypeOf<false>();
  });
});
