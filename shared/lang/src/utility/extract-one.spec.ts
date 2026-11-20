import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { ExtractOne } from "./extract-one";

describe("type ExtractOne<T>", () => {
  it("should be exactly one of the types included in `T`, \
      if `T` is a union of two types", () => {
    type A = number;
    type B = string;

    type E = ExtractOne<A | B>;
    // it is unknown which of the types was extracted

    expectTypeOf<E>().not.toBeAny();
    expectTypeOf<E>().not.toBeNever();
    expectTypeOf<E>().not.toBeUnknown();

    expectTypeOf<E>().toExtend<A | B>();
    // `E` is `A | B` or `A` or `B`
    expectTypeOf<A | B>().not.toExtend<E>();
    // `E` is `A` or `B`
  });

  it("should be exactly one of the types included in `T`, \
      if `T` is a union of three types", () => {
    type A = number;
    type B = string;
    type C = symbol;

    type E = ExtractOne<A | B | C>;
    // it is unknown which of the types was extracted

    expectTypeOf<E>().not.toBeAny();
    expectTypeOf<E>().not.toBeNever();
    expectTypeOf<E>().not.toBeUnknown();

    expectTypeOf<E>().toExtend<A | B | C>();
    // `E` is `A | B | C` or `A | B` or `A | C` or `B | C` or `A` or `B` or `C`
    expectTypeOf<A | B | C>().not.toExtend<E>();
    // `E` is `A | B` or `A | C` or `B | C` or `A` or `B` or `C`
    expectTypeOf<A | B>().not.toExtend<E>();
    // `E` is `A | C` or `B | C` or `A` or `B` or `C`
    expectTypeOf<A | C>().not.toExtend<E>();
    // `E` is `B | C` or `A` or `B` or `C`
    expectTypeOf<B | C>().not.toExtend<E>();
    // `E` is `A` or `B` or `C`
  });

  it("should be `T` if `T` is not a union", () => {
    expectTypeOf<ExtractOne<number>>().toEqualTypeOf<number>();
    expectTypeOf<ExtractOne<string>>().toEqualTypeOf<string>();
  });

  it("should be `never` if `T` is `never`", () => {
    expectTypeOf<ExtractOne<never>>().toBeNever();
  });

  it("should be `any` if `T` is `any`", () => {
    expectTypeOf<ExtractOne<Any>>().toBeAny();
  });
});
