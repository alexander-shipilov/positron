/* eslint-disable @typescript-eslint/no-unnecessary-template-expression */
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ExcludeNominalInterpolations } from "./exclude-nominal-interpolations";
import type { Nominal } from "./nominal";

describe("type ExcludeNominalInterpolations<T>", () => {
  it("should exclude nominal tags from the given `T`", () => {
    expectTypeOf<
      ExcludeNominalInterpolations<Nominal<string>>
    >().toEqualTypeOf<string>();
  });

  it("should exclude nominal tags at all interpolated positions in `T`", () => {
    expectTypeOf<
      ExcludeNominalInterpolations<
        `${Nominal<"foo">}` //
      >
    >().toEqualTypeOf<"foo">();
    expectTypeOf<
      ExcludeNominalInterpolations<
        `${Nominal<string>}` //
      >
    >().toEqualTypeOf<string>();
    expectTypeOf<
      ExcludeNominalInterpolations<
        `foo${Nominal<string>}` //
      >
    >().toEqualTypeOf<`foo${string}`>();
    expectTypeOf<
      ExcludeNominalInterpolations<
        `foo${Nominal<number>}` //
      >
    >().toEqualTypeOf<`foo${number}`>();
    expectTypeOf<
      ExcludeNominalInterpolations<
        `foo${Nominal<`bar${string}`>}` //
      >
    >().toEqualTypeOf<`foobar${string}`>();
    expectTypeOf<
      ExcludeNominalInterpolations<
        `foo${Nominal<`${Nominal<number>}bar${string}`>}` //
      >
    >().toEqualTypeOf<`foo${number}bar${string}`>();
  });

  it("should return `T` if `T` is not a nominal type", () => {
    expectTypeOf<
      ExcludeNominalInterpolations<string>
    >().toEqualTypeOf<string>();
  });
});
