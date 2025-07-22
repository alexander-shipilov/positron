import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { MetaDataOf } from "./meta-data-of";
import type { MetaType } from "./meta-type";

declare const T: unique symbol;
type T = typeof T;
type V = 1;

describe("MetaDataOf<Type, K>", () => {
  it("should be `V` if `Type` is `MetaType<Type, T, V>`", () => {
    type Type1 = MetaType<1>;
    expectTypeOf<MetaDataOf<Type1, T>>().toBeNever();

    type Type2 = MetaType<1, T>;
    expectTypeOf<MetaDataOf<Type2, T>>().toBeUnknown();

    type Type3 = MetaType<1, T, V>;
    expectTypeOf<MetaDataOf<Type3, T>>().toEqualTypeOf<V>();
  });
});
