import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any";
import type { EmptyObject } from "../object";
import type { Optional } from "../utility";

import type { PropertyOwner } from "./property-owner";

describe("PropertyOwner<K, V>", () => {
  it("should return `{ [T in K]?: V }` if `K` is key and `T` is required", () => {
    type V = 1;

    type K1 = string;
    type K2 = "foo";
    expectTypeOf<PropertyOwner<K1, V>>().toEqualTypeOf<{ [T in K1]: V }>();
    expectTypeOf<PropertyOwner<K2, V>>().toEqualTypeOf<{ [T in K2]: V }>();

    type K3 = symbol;
    type K4 = typeof Symbol.iterator;
    expectTypeOf<PropertyOwner<K3, V>>().toEqualTypeOf<{ [T in K3]: V }>();
    expectTypeOf<PropertyOwner<K4, V>>().toEqualTypeOf<{ [T in K4]: V }>();

    type K5 = number;
    type K6 = 1;
    expectTypeOf<PropertyOwner<K5, V>>().toEqualTypeOf<{ [T in K5]: V }>();
    expectTypeOf<PropertyOwner<K6, V>>().toEqualTypeOf<{ [T in K6]: V }>();
  });

  it("should `{ [T in K]?: V }` if `V` is `undefined or `extends `undefined`", () => {
    type K = "key";

    type V1 = undefined;
    expectTypeOf<PropertyOwner<K, V1>>().toEqualTypeOf<{ [T in K]?: V1 }>();

    type V2 = Optional<number>;
    expectTypeOf<PropertyOwner<K, V2>>().toEqualTypeOf<{ [T in K]?: V2 }>();
  });

  it("should return `{ [T in K]?: V }` if `V` is `any` or `unknown`", () => {
    type K = "key";

    type V1 = Any;
    expectTypeOf<PropertyOwner<K, V1>>().toEqualTypeOf<{ [T in K]?: V1 }>();

    type V2 = Any;
    expectTypeOf<PropertyOwner<K, V2>>().toEqualTypeOf<{ [T in K]?: V2 }>();
  });

  it("should return `EmptyObject` if 'K' or `V` is `never`", () => {
    type K1 = "key";
    type V1 = never;

    expectTypeOf<PropertyOwner<K1, V1>>().toEqualTypeOf<EmptyObject>();

    type K2 = never;
    type V2 = "value";
    expectTypeOf<PropertyOwner<K2, V2>>().toEqualTypeOf<EmptyObject>();

    type K3 = never;
    type V3 = never;
    expectTypeOf<PropertyOwner<K3, V3>>().toEqualTypeOf<EmptyObject>();
  });
});
