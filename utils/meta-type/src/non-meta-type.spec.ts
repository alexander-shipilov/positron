import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "@positron/core/src";

import type { MetaType } from "./meta-type";
import type { NonMetaType } from "./non-meta-type";

declare const T: unique symbol;
type T = typeof T;
type V = 1;

describe("NonMetaType<T>", () => {
  it("should be `T` if `T` is MetaType<T>", () => {
    type Type1 = MetaType<1>;
    expectTypeOf<NonMetaType<Type1>>().toEqualTypeOf<1>();

    type Type2 = MetaType<1, T>;
    expectTypeOf<NonMetaType<Type2>>().toEqualTypeOf<1>();

    type Type3 = MetaType<1, T, V>;
    expectTypeOf<NonMetaType<Type3>>().toEqualTypeOf<1>();
  });

  it("should be `T` if `T` is not meta-type", () => {
    type Type1 = NonMetaType<unknown>;
    expectTypeOf<Type1>().toEqualTypeOf<unknown>();
  });

  it("`NonMetaType<any>` should be `any`", () => {
    expectTypeOf<NonMetaType<Any>>().toBeAny();
  });
});
