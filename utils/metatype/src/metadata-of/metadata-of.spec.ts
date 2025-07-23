import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Metatype } from "../metatype";

import type { MetadataOf } from "./metadata-of";

declare const T: unique symbol;
type T = typeof T;
type V = 1;

describe("MetadataOf<Type, K>", () => {
  it("should be `V` if `Type` is `Metatype<Type, T, V>`", () => {
    type Type1 = Metatype<1>;
    expectTypeOf<MetadataOf<Type1, T>>().toBeNever();

    type Type2 = Metatype<1, T>;
    expectTypeOf<MetadataOf<Type2, T>>().toBeUnknown();

    type Type3 = Metatype<1, T, V>;
    expectTypeOf<MetadataOf<Type3, T>>().toEqualTypeOf<V>();
  });
});
