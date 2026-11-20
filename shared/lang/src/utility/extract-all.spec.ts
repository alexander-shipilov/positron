import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";

import type { ExtractAll } from "./extract-all";

describe("type ExtractAll<T>", () => {
  it("should be a finite tuple of the types contained within union `T`", () => {
    type T = number | string;
    type E = ExtractAll<T>;
    // The `ExtractAll` type does not preserve order, so it is impossible to
    // determine which type comes first and which comes second.

    expectTypeOf<E["length"]>().toEqualTypeOf<2>();
    // Resulting tuple contains 2 elements.
    expectTypeOf<E[0] | E[1]>().toEqualTypeOf<T>();
    // The union of the types contained in a tuple is equal to the source type.
    expectTypeOf<E[0]>().not.toBeAny();
    expectTypeOf<E[0]>().not.toBeNever();
    expectTypeOf<E[1]>().not.toBeAny();
    expectTypeOf<E[1]>().not.toBeNever();
    // None of the elements in the tuple is `any` or `never`.
    expectTypeOf<E[0]>().toExtend<T>();
    expectTypeOf<E[1]>().toExtend<T>();
    // Both elements of the tuple extend the source type.
    expectTypeOf<T>().not.toExtend<E[1]>();
    expectTypeOf<T>().not.toExtend<E[0]>();
    // The source type does not extend any of the tuple elements.

    // So, each element in the resulting tuple contains exactly one type from
    // the source union.

    expectTypeOf<E[0]>().not.toEqualTypeOf<E[1]>();
    // An extra test for the paranoid.
    // The first type in the tuple is not equal to the second.
  });

  it("should be `[T]` if `T` is not a union", () => {
    expectTypeOf<ExtractAll<string>>().toEqualTypeOf<[string]>();
    expectTypeOf<ExtractAll<1>>().toEqualTypeOf<[1]>();
  });

  it("should be `[never]` if `T` is `never`", () => {
    expectTypeOf<ExtractAll<never>>().toEqualTypeOf<[never]>();
  });

  it("should be `[any]` if `T` is `any`", () => {
    expectTypeOf<ExtractAll<Any>>().toEqualTypeOf<[Any]>();
  });
});
