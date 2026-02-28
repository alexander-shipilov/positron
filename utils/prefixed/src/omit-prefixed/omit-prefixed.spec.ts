import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { AnyObject } from "@positron/core";

import type { OmitPrefixed } from "./omit-prefixed";

describe(`OmitPrefixed<T, P>`, () => {
  type P = "foo";

  it("should omit properties from `T` which are prefixed by `P`", () => {
    type T = { "foo-bar": unknown };
    expectTypeOf<OmitPrefixed<T, P>>().toEqualTypeOf<AnyObject>();
  });

  it("should preserve properties from `T` which are not prefixed by `P`", () => {
    type T1 = { foo: unknown };
    expectTypeOf<OmitPrefixed<T1, P>>().toEqualTypeOf<T1>();

    type T2 = { bar: unknown };
    expectTypeOf<OmitPrefixed<T2, P>>().toEqualTypeOf<T2>();
  });

  it("should preserve index properties from `T`", () => {
    type T = Record<PropertyKey, unknown>;
    expectTypeOf<OmitPrefixed<T, P>>().toEqualTypeOf<T>();
  });

  it("should preserve symbol properties from `T`", () => {
    type T = { [Symbol.iterator]: unknown };
    expectTypeOf<OmitPrefixed<T, P>>().toEqualTypeOf<T>();
  });
});
