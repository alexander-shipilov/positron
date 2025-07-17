import type { EmptyObject } from "@positron/core";
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PickPrefixed } from "./pick-prefixed";

describe(`PickPrefixed<P, T>`, () => {
  type P = "foo";

  it("should pick properties from `T` which are prefixed by `P`", () => {
    type T1 = { "foo-bar": unknown };
    expectTypeOf<PickPrefixed<P, T1>>().toEqualTypeOf<{ bar: unknown }>();

    type T2 = { "foo-bar": unknown; "foo-bar-ted": unknown };
    expectTypeOf<PickPrefixed<P, T2>>().toEqualTypeOf<{
      bar: unknown;
      "bar-ted": unknown;
    }>();

    type T3 = Record<`${P}-${string}`, unknown>;
    expectTypeOf<PickPrefixed<P, T3>>().toEqualTypeOf<
      Record<string, unknown>
    >();
  });

  it("should skip properties from `T` which are not prefixed by `P`", () => {
    type T1 = { foo: unknown };
    expectTypeOf<PickPrefixed<P, T1>>().toEqualTypeOf<EmptyObject>();

    type T2 = { bar: unknown };
    expectTypeOf<PickPrefixed<P, T2>>().toEqualTypeOf<EmptyObject>();
  });

  it("should skip symbols and indexes", () => {
    const foo = Symbol("");

    type T1 = { [foo]: unknown };
    expectTypeOf<PickPrefixed<P, T1>>().toEqualTypeOf<EmptyObject>();

    type T2 = { [index: number]: unknown };
    expectTypeOf<PickPrefixed<P, T2>>().toEqualTypeOf<EmptyObject>();

    type T3 = { [index: string]: unknown };
    expectTypeOf<PickPrefixed<P, T3>>().toEqualTypeOf<EmptyObject>();
  });
});
