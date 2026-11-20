import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "../any/any";
import type { NumberNegativeInfinity } from "../number/number-negative-infinity";
import type { NumberPositiveInfinity } from "../number/number-positive-infinity";

import type { IsIndexerKey } from "./is-indexer-key";

describe("type IsIndexerKey<T>", () => {
  it("should be `true` if `T` is `any`", () => {
    expectTypeOf<IsIndexerKey<Any>>().toEqualTypeOf<true>();
    expectTypeOf<Record<Any, never>>().toHaveProperty(0);
    expectTypeOf<Record<Any, never>>().toHaveProperty("foo");
    expectTypeOf<Record<Any, never>>().toHaveProperty(Symbol.iterator);
  });

  it("should be `true` if `T` is `number`", () => {
    type T = number;

    expectTypeOf<IsIndexerKey<T>>().toEqualTypeOf<true>();
    expectTypeOf<Record<T, never>>().toHaveProperty(0);
    expectTypeOf<Record<T, never>>().toHaveProperty(1);
  });

  it("should be `true` if `T` is `string`", () => {
    type T = string;

    expectTypeOf<IsIndexerKey<T>>().toEqualTypeOf<true>();
    expectTypeOf<Record<T, never>>().toHaveProperty("foo");
  });

  it("should be `true` if `T` is a literal template string of infinite length", () => {
    type T1 = `foo-${number}`;

    expectTypeOf<IsIndexerKey<T1>>().toEqualTypeOf<true>();
    expectTypeOf<Record<T1, never>>().toHaveProperty("foo-0");

    type T2 = `on${Capitalize<string>}`;

    expectTypeOf<IsIndexerKey<T2>>().toEqualTypeOf<true>();
    expectTypeOf<Record<T2, never>>().toHaveProperty("onFoo");
  });

  it("should be `true` if `T` is `symbol`", () => {
    type T = symbol;

    expectTypeOf<IsIndexerKey<T>>().toEqualTypeOf<true>();
    expectTypeOf<Record<T, never>>().toHaveProperty(Symbol.iterator);
  });

  it("should be `false` if `T` is a number literal", () => {
    type T1 = 0;

    expectTypeOf<IsIndexerKey<T1>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T1, never>>().toHaveProperty(0);
    expectTypeOf<Record<T1, never>>().not.toHaveProperty(1);

    type T2 = 1.1;

    expectTypeOf<IsIndexerKey<T2>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T2, never>>().toHaveProperty(1.1);
    expectTypeOf<Record<T2, never>>().not.toHaveProperty(0);

    type T3 = NumberPositiveInfinity;

    expectTypeOf<IsIndexerKey<T3>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T3, never>>().not.toHaveProperty(0);

    type T4 = NumberNegativeInfinity;

    expectTypeOf<IsIndexerKey<T4>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T4, never>>().not.toHaveProperty(0);
  });

  it("should be `false` if `T` is a string literal", () => {
    type T = "foo";

    expectTypeOf<IsIndexerKey<T>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T, never>>().toHaveProperty("foo");
    expectTypeOf<Record<T, never>>().not.toHaveProperty("fooA");
  });

  it("should be `false` if `T` is a literal template string of finite length", () => {
    type T = `foo-${boolean}`;

    expectTypeOf<IsIndexerKey<T>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T, number>>().toHaveProperty("foo-true");
    expectTypeOf<Record<T, number>>().toHaveProperty("foo-false");
    expectTypeOf<Record<T, number>>().not.toHaveProperty("foo-bar");
  });

  it("should be `false` if `T` is `unique symbol`", () => {
    type T = (typeof Symbol)["iterator"];

    expectTypeOf<IsIndexerKey<T>>().toEqualTypeOf<false>();
    expectTypeOf<Record<T, never>>().not.toHaveProperty(Symbol.toStringTag);
  });

  it("should be `false` if `T` is `never`", () => {
    expectTypeOf<IsIndexerKey<never>>().toEqualTypeOf<false>();
  });
});
