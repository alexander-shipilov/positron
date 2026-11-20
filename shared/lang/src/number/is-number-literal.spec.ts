import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { IsNumberLiteral } from "./is-number-literal";
import type { NumberNegativeInfinity } from "./number-negative-infinity";
import type { NumberPositiveInfinity } from "./number-positive-infinity";

describe("type IsNumberLiteral<T>", () => {
  it("should be `true` if `T` is a number literal", () => {
    expectTypeOf<IsNumberLiteral<1>>().toEqualTypeOf<true>();
    expectTypeOf<IsNumberLiteral<1.1>>().toEqualTypeOf<true>();
    expectTypeOf<
      IsNumberLiteral<NumberPositiveInfinity>
    >().toEqualTypeOf<true>();
    expectTypeOf<
      IsNumberLiteral<NumberNegativeInfinity>
    >().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is not a number literal", () => {
    expectTypeOf<IsNumberLiteral<number>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `never` or `any`", () => {
    expectTypeOf<IsNumberLiteral<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumberLiteral<Any>>().toEqualTypeOf<false>();
  });
});
