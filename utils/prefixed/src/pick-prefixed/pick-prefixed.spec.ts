import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { AnyObject } from "@positron/core";

import type { PickPrefixed } from "./pick-prefixed";

describe(`PickPrefixed<T, P>`, () => {
  type P = "foo";

  it("should pick properties from `T` which are prefixed by `P`", () => {
    type T1 = { "foo-bar": unknown };
    expectTypeOf<PickPrefixed<T1, P>>().toEqualTypeOf<{ bar: unknown }>();

    type T2 = { "foo-bar": unknown; "foo-bar-ted": unknown };
    expectTypeOf<PickPrefixed<T2, P>>().toEqualTypeOf<{
      bar: unknown;
      "bar-ted": unknown;
    }>();

    type T3 = Record<`${P}-${string}`, unknown>;
    expectTypeOf<PickPrefixed<T3, P>>().toEqualTypeOf<
      Record<string, unknown>
    >();
  });

  it("should skip properties from `T` which are not prefixed by `P`", () => {
    type T1 = { foo: unknown };
    expectTypeOf<PickPrefixed<T1, P>>().toEqualTypeOf<AnyObject>();

    type T2 = { bar: unknown };
    expectTypeOf<PickPrefixed<T2, P>>().toEqualTypeOf<AnyObject>();
  });

  it("should skip symbols and indexes", () => {
    const foo = Symbol("");

    type T1 = { [foo]: unknown };
    expectTypeOf<PickPrefixed<T1, P>>().toEqualTypeOf<AnyObject>();

    type T2 = { [index: number]: unknown };
    expectTypeOf<PickPrefixed<T2, P>>().toEqualTypeOf<AnyObject>();

    type T3 = { [index: string]: unknown };
    expectTypeOf<PickPrefixed<T3, P>>().toEqualTypeOf<AnyObject>();
  });
});
