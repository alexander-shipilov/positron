import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { MetaType } from "./meta-type";
import type { NonMetaType } from "./non-meta-type";

declare const Tag1: unique symbol;
type Tag1 = typeof Tag1;
type Value1 = 1;

declare const Tag2: unique symbol;
type Tag2 = typeof Tag2;
type Value2 = 2;

describe("NonMetaType<Type, T, V>", () => {
  type Type = number;
  type Type1 = MetaType<Type>;
  type Type2 = MetaType<Type, Tag1>;
  type Type3 = MetaType<Type, Tag1, Value1>;

  it("`NonMetaType<Type>` should return `T` if `T` is MetaType<T>", () => {
    expectTypeOf<NonMetaType<Type1>>().toEqualTypeOf<Type>();
    expectTypeOf<NonMetaType<Type2>>().toEqualTypeOf<Type>();
    expectTypeOf<NonMetaType<Type3>>().toEqualTypeOf<Type>();

    expectTypeOf<
      NonMetaType<MetaType<Type3, Tag2, Value2>>
    >().toEqualTypeOf<Type>();
  });
});
