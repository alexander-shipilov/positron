import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { Intersection } from "./intersection";

describe("type Intersection<T>", () => {
  it("should convert the given union type `T` to an intersection", () => {
    type A1 = number;
    type B1 = string;
    expectTypeOf<Intersection<A1 | B1>>().toEqualTypeOf<A1 & B1>();

    type A2 = { a: 1; b: 2 };
    type B2 = { b: 2; c: 3 };
    expectTypeOf<Intersection<A2 | B2>>().toEqualTypeOf<A2 & B2>();
  });

  it("should be `T` if `T` is not a union", () => {
    expectTypeOf<Intersection<number>>().toEqualTypeOf<number>();
    expectTypeOf<Intersection<{ a: 1 }>>().toEqualTypeOf<{ a: 1 }>();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<Intersection<never>>().toBeNever();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<Intersection<Any>>().toBeAny();
  });
});
