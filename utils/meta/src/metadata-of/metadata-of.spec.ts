import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Metatype } from "../metatype";

import type { MetadataOf } from "./metadata-of";

declare const T1: unique symbol;
type T1 = typeof T1;
type V1 = 1;

declare const T2: unique symbol;
type T2 = typeof T2;
type V2 = 2;

declare const T3: unique symbol;
type T3 = typeof T3;
type V3 = 3;

describe("MetadataOf<Type, T>", () => {
  type Type = unknown;
  type MetaType1 = Metatype<Type>;
  type MetaType2 = Metatype<Type, T1>;
  type MetaType3 = Metatype<Type, T1, V1>;

  it("should be `V` if `Type` is `Metatype<Type, T, V>`", () => {
    expectTypeOf<MetadataOf<MetaType1>>().toBeUnknown();
    expectTypeOf<MetadataOf<MetaType2>>().toBeUnknown();

    expectTypeOf<MetadataOf<MetaType3>>().toEqualTypeOf<V1>();
    expectTypeOf<MetadataOf<MetaType3, T1>>().toEqualTypeOf<V1>();
  });

  it(
    "should be `V1 | V2` if `Type` is" +
      " `Metatype<Metatype<Type, T, V1>, T, V2>`",
    () => {
      type Type1 = Metatype<MetaType3, T2, V2>;
      expectTypeOf<MetadataOf<Type1, T1>>().toEqualTypeOf<V1>();
      expectTypeOf<MetadataOf<Type1, T2>>().toEqualTypeOf<V2>();
    },
  );

  it(
    "should be `V1 | ... | Vn` if `Type` is" +
      " `Metatype<...<Metatype<Type, T1, V1>, ...>, Tn, Vn>`",
    () => {
      type Type0 = Type;

      type Type1 = Metatype<Type0, T1, V1>;
      expectTypeOf<MetadataOf<Type1, T1>>().toEqualTypeOf<V1>();
      expectTypeOf<MetadataOf<Type1>>().toEqualTypeOf<V1>();

      type Type2 = Metatype<Type1, T2, V2>;
      expectTypeOf<MetadataOf<Type2, T1>>().toEqualTypeOf<V1>();
      expectTypeOf<MetadataOf<Type2, T2>>().toEqualTypeOf<V2>();
      expectTypeOf<MetadataOf<Type2>>().toEqualTypeOf<
        | V1 //
        | V2
      >();

      type Type3 = Metatype<Type2, T3, V3>;
      expectTypeOf<MetadataOf<Type3, T1>>().toEqualTypeOf<V1>();
      expectTypeOf<MetadataOf<Type3, T2>>().toEqualTypeOf<V2>();
      expectTypeOf<MetadataOf<Type3, T3>>().toEqualTypeOf<V3>();
      expectTypeOf<MetadataOf<Type3>>().toEqualTypeOf<
        | V1 //
        | V2
        | V3
      >();
    },
  );

  it("should be `never` if `Type` has no tag `T`", () => {
    expectTypeOf<MetadataOf<Type, T1>>().toBeNever();

    type Type1 = Metatype<Type>;
    expectTypeOf<MetadataOf<Type1, T1>>().toBeUnknown();

    type Type2 = Metatype<Type, T2>;
    expectTypeOf<MetadataOf<Type2, T1>>().toBeNever();

    type Type3 = Metatype<Type, T2, V2>;
    expectTypeOf<MetadataOf<Type3, T1>>().toBeNever();
  });
});
