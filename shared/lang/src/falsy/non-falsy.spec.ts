import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { FalsyLiteral } from "./falsy-literal";
import type { NonFalsy } from "./non-falsy";

describe("type NonFalsy<T>", () => {
  it("should exclude `FalsyLiteral` from `T`", () => {
    type X = [];

    expectTypeOf<NonFalsy<"" | X>>().toEqualTypeOf<X>();
    expectTypeOf<NonFalsy<0 | X>>().toEqualTypeOf<X>();
    expectTypeOf<NonFalsy<0n | X>>().toEqualTypeOf<X>();
    expectTypeOf<NonFalsy<false | X>>().toEqualTypeOf<X>();
    expectTypeOf<NonFalsy<null | X>>().toEqualTypeOf<X>();
    expectTypeOf<NonFalsy<undefined | X>>().toEqualTypeOf<X>();
  });

  it("should be `T` if `T` is not falsy", () => {
    expectTypeOf<NonFalsy<number>>().toEqualTypeOf<number>();
  });

  it("should be `never` if `T` is `FalsyLiteral`", () => {
    expectTypeOf<NonFalsy<FalsyLiteral>>().toBeNever();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<NonFalsy<never>>().toBeNever();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<NonFalsy<Any>>().toBeAny();
  });
});
