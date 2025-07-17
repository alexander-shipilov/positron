import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Prefixed } from "./prefixed";

describe(`Prefixed<P, T>`, () => {
  type P = "foo";

  it("should add `P` to all string literal properties of `T`", () => {
    type T1 = { bar: unknown };
    expectTypeOf<Prefixed<P, T1>>().toEqualTypeOf<{ "foo-bar": unknown }>();

    type T2 = { bar: unknown; "bar-ted": unknown };
    expectTypeOf<Prefixed<P, T2>>().toEqualTypeOf<{
      "foo-bar": unknown;
      "foo-bar-ted": unknown;
    }>();
  });

  it("should return `never` if `T` is `never`", () => {
    expectTypeOf<Prefixed<P, never>>().toBeNever();
  });

  it(
    "should return `Record<${P}-${string}`, ...> if" +
      " `T` is `Record<string, ...>`",
    () => {
      type T = Record<string, unknown>;
      expectTypeOf<Prefixed<P, T>>().toEqualTypeOf<
        Record<`${P}-${string}`, unknown>
      >();
    },
  );

  it("should preserve index properties from `T`", () => {
    type T1 = Record<number, unknown>;
    expectTypeOf<Prefixed<P, T1>>().toEqualTypeOf<T1>();

    type T2 = Record<symbol, unknown>;
    expectTypeOf<Prefixed<P, T2>>().toEqualTypeOf<T2>();
  });

  it("should preserve symbol properties from `T`", () => {
    const foo = Symbol("");

    type T = { [foo]: unknown };
    expectTypeOf<Prefixed<P, T>>().toEqualTypeOf<T>();
  });
});
