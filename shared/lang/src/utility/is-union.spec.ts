import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { IsUnion } from "./is-union";

describe("type IsUnion<T>", () => {
  it("should be `true` if `T` is a union type", () => {
    expectTypeOf<IsUnion<number | string>>().toEqualTypeOf<true>();
    expectTypeOf<IsUnion<1 | 2>>().toEqualTypeOf<true>();
    expectTypeOf<IsUnion<1 | 2 | 3>>().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is not a union type", () => {
    expectTypeOf<IsUnion<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<1>>().toEqualTypeOf<false>();
    // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    expectTypeOf<IsUnion<1 | number>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `never`", () => {
    expectTypeOf<IsUnion<never>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `unknown`", () => {
    expectTypeOf<IsUnion<unknown>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `any`", () => {
    expectTypeOf<IsUnion<Any>>().toEqualTypeOf<false>();
  });
});
