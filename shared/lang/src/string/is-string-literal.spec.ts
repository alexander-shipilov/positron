/* eslint-disable @typescript-eslint/no-unnecessary-template-expression */
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";
import type { Nominal } from "../nominal/nominal";

import type { IsStringLiteral } from "./is-string-literal";

describe("type IsStringLiteral<T>", () => {
  it("should be `true` if `T` is a string literal", () => {
    expectTypeOf<IsStringLiteral<"">>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<"a">>().toEqualTypeOf<true>();
  });

  it("should be `true` if `T` is a literal template containing only literals", () => {
    expectTypeOf<IsStringLiteral<`a${"b"}`>>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<`a${`b${1}`}`>>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<`a${1}`>>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<`a${1n}`>>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<`a${boolean}`>>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<`a${null}`>>().toEqualTypeOf<true>();
    expectTypeOf<IsStringLiteral<`a${undefined}`>>().toEqualTypeOf<true>();
  });

  it("should be `true` if `T` is a union of string literals", () => {
    expectTypeOf<IsStringLiteral<"a" | "b">>().toEqualTypeOf<true>();
  });

  it("should be `true` if `T` is a union of literal templates containing only literals", () => {
    expectTypeOf<
      IsStringLiteral<
        | `a${"b"}`
        | `a${1}`
        | `a${2n}`
        | `a${`b${"c"}`}`
        | `a${`b${1}`}`
        | `a${boolean}`
        | `a${null}`
        | `a${undefined}`
      >
    >().toEqualTypeOf<true>();
  });

  it("should be `false` if `T` is not string literal", () => {
    expectTypeOf<IsStringLiteral<string>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is a literal template containing non-literals", () => {
    expectTypeOf<IsStringLiteral<`a${string}`>>().toEqualTypeOf<false>();
    expectTypeOf<IsStringLiteral<`a${number}`>>().toEqualTypeOf<false>();
    expectTypeOf<IsStringLiteral<`a${bigint}`>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is a union containing non-literals", () => {
    expectTypeOf<IsStringLiteral<"a" | `a${string}`>>().toEqualTypeOf<false>();
    expectTypeOf<IsStringLiteral<"a" | `a${number}`>>().toEqualTypeOf<false>();
    expectTypeOf<IsStringLiteral<"a" | `a${bigint}`>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `string`", () => {
    expectTypeOf<IsStringLiteral<string>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `Nominal<string>`", () => {
    expectTypeOf<IsStringLiteral<Nominal<string>>>().toEqualTypeOf<false>();
  });

  it("should be `false` if `T` is `never` or `any`", () => {
    expectTypeOf<IsStringLiteral<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsStringLiteral<Any>>().toEqualTypeOf<false>();
  });
});
