/* eslint-disable @typescript-eslint/no-generated-empty-object-type */
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Prefixed } from "./prefixed";

describe(`type Prefixed<P, T>`, () => {
  type P = "foo";

  it("should add `P` to string named properties of `T`", () => {
    type T1 = { bar: unknown };
    expectTypeOf<Prefixed<P, T1>>().toEqualTypeOf<{ "foo-bar": unknown }>();

    type T2 = { bar: unknown; "bar-ted": unknown };
    expectTypeOf<Prefixed<P, T2>>().toEqualTypeOf<{
      "foo-bar": unknown;
      "foo-bar-ted": unknown;
    }>();

    type T3 = Record<string, unknown>;
    expectTypeOf<Prefixed<P, T3>>().toEqualTypeOf<
      Record<`${P}-${string}`, unknown>
    >();

    type T4 = Record<number, unknown>;
    expectTypeOf<Prefixed<P, T4>>().toEqualTypeOf<
      Record<`${P}-${number}`, unknown>
    >();
  });

  it("should return an empty `Record` if `T` has no named properties", () => {
    type T1 = object;
    expectTypeOf<Prefixed<P, T1>>().toEqualTypeOf<Record<never, never>>();

    type T2 = Record<symbol, unknown>;
    expectTypeOf<Prefixed<P, T2>>().toEqualTypeOf<Record<never, never>>();

    type T3 = { [Symbol.iterator]: unknown };
    expectTypeOf<Prefixed<P, T3>>().toEqualTypeOf<Record<never, never>>();
  });
});
