/* eslint-disable @typescript-eslint/no-generated-empty-object-type */
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PickPrefixed } from "./pick-prefixed";
import type { Prefixed } from "./prefixed";

describe(`type PickPrefixed<P, T>`, () => {
  type P = "foo";

  it("should pick properties from `T` which are prefixed by `P`", () => {
    type T1 = { bar: unknown };
    expectTypeOf<PickPrefixed<P, Prefixed<P, T1>>>().toEqualTypeOf<T1>();

    type T2 = { "bar-ted": unknown; "foo-ted": unknown };
    expectTypeOf<PickPrefixed<P, Prefixed<P, T2>>>().toEqualTypeOf<T2>();

    type T3 = Record<string, unknown>;
    expectTypeOf<PickPrefixed<P, Prefixed<P, T3>>>().toEqualTypeOf<T3>();

    type T4 = Record<number, unknown>;
    expectTypeOf<PickPrefixed<P, Prefixed<P, T4>>>().toEqualTypeOf<T4>();
  });

  it("should skip properties from `T` which are not prefixed by `P`", () => {
    type T1 = { foo: unknown };
    expectTypeOf<PickPrefixed<P, T1>>().toEqualTypeOf<Record<never, never>>();

    type T2 = { bar: unknown };
    expectTypeOf<PickPrefixed<P, T2>>().toEqualTypeOf<Record<never, never>>();
  });

  it("should skip symbols and indexes", () => {
    const foo = Symbol("");

    type T1 = { [foo]: unknown };
    expectTypeOf<PickPrefixed<P, T1>>().toEqualTypeOf<Record<never, never>>();

    type T2 = { [index: number]: unknown };
    expectTypeOf<PickPrefixed<P, T2>>().toEqualTypeOf<Record<never, never>>();

    type T3 = { [index: string]: unknown };
    expectTypeOf<PickPrefixed<P, T3>>().toEqualTypeOf<Record<never, never>>();

    type T4 = { [index: symbol]: unknown };
    expectTypeOf<PickPrefixed<P, T4>>().toEqualTypeOf<Record<never, never>>();
  });
});
