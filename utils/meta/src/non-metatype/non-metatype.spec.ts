import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Metatype } from "../metatype/metatype";

import type { NonMetatype } from "./non-metatype";

declare const Tag1: unique symbol;
type Tag1 = typeof Tag1;
type Value1 = 1;

declare const Tag2: unique symbol;
type Tag2 = typeof Tag2;
type Value2 = 2;

describe("NonMetatype<Type, T, V>", () => {
  type Type = number;
  type Type1 = Metatype<Type>;
  type Type2 = Metatype<Type, Tag1>;
  type Type3 = Metatype<Type, Tag1, Value1>;

  it("`NonMetatype<Type>` should return `T` if `T` is `Metatype<T>`", () => {
    expectTypeOf<NonMetatype<Type1>>().toEqualTypeOf<Type>();
    expectTypeOf<NonMetatype<Type2>>().toEqualTypeOf<Type>();
    expectTypeOf<NonMetatype<Type3>>().toEqualTypeOf<Type>();

    expectTypeOf<
      NonMetatype<Metatype<Type3, Tag2, Value2>>
    >().toEqualTypeOf<Type>();
  });

  it("`NonMetatype<Type>` should return `T` if `T` is no `Metatype`", () => {
    expectTypeOf<NonMetatype<unknown>>().toEqualTypeOf<unknown>();
  });
});
