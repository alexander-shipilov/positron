import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "@positron/core";

import type { Metatype } from "../metatype";

import type { NonMetatype } from "./non-metatype";

declare const T: unique symbol;
type T = typeof T;
type V = 1;

describe("NonMetatype<T>", () => {
  it("should be `T` if `T` is Metatype<T>", () => {
    type Type1 = Metatype<1>;
    expectTypeOf<NonMetatype<Type1>>().toEqualTypeOf<1>();

    type Type2 = Metatype<1, T>;
    expectTypeOf<NonMetatype<Type2>>().toEqualTypeOf<1>();

    type Type3 = Metatype<1, T, V>;
    expectTypeOf<NonMetatype<Type3>>().toEqualTypeOf<1>();
  });

  it("should be `T` if `T` is not metatype", () => {
    type Type1 = NonMetatype<unknown>;
    expectTypeOf<Type1>().toEqualTypeOf<unknown>();
  });

  it("`NonMetatype<any>` should be `any`", () => {
    expectTypeOf<NonMetatype<Any>>().toBeAny();
  });
});
