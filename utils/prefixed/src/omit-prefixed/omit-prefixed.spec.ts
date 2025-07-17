import type { EmptyObject } from "@positron/core";
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { OmitPrefixed } from "./omit-prefixed";

describe(`OmitPrefixed<P, T>`, () => {
  type P = "foo";

  it("should omit properties from `T` which are prefixed by `P`", () => {
    type T = { "foo-bar": unknown };
    expectTypeOf<OmitPrefixed<P, T>>().toEqualTypeOf<EmptyObject>();
  });

  it("should preserve properties from `T` which are not prefixed by `P`", () => {
    type T1 = { foo: unknown };
    expectTypeOf<OmitPrefixed<P, T1>>().toEqualTypeOf<T1>();

    type T2 = { bar: unknown };
    expectTypeOf<OmitPrefixed<P, T2>>().toEqualTypeOf<T2>();
  });

  it("should preserve index properties from `T`", () => {
    type T = Record<PropertyKey, unknown>;
    expectTypeOf<OmitPrefixed<P, T>>().toEqualTypeOf<T>();
  });

  it("should preserve symbol properties from `T`", () => {
    type T = { [Symbol.iterator]: unknown };
    expectTypeOf<OmitPrefixed<P, T>>().toEqualTypeOf<T>();
  });
});
