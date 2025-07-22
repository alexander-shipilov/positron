import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Described } from "../described";

import type { Value } from "./value";
import type { ValueConfig } from "./value-config";
import type { ValueConfigOf } from "./value-config-of";

describe("ValueConfigOf<T>", () => {
  it("should return { value: T, meta: never } if `T` is Value<V> ", () => {
    type T1 = Value<string>;
    expectTypeOf<ValueConfigOf<T1>>().toEqualTypeOf<
      ValueConfig<string, never>
    >();
  });

  it("should return { value: T, meta: M } if `T` is Value<V, M> ", () => {
    type T1 = Value<string, 1>;
    expectTypeOf<ValueConfigOf<T1>>().toEqualTypeOf<ValueConfig<string, 1>>();
  });

  it("should return `never` if no property descriptor assigned to the `T`", () => {
    expectTypeOf<ValueConfigOf<string>>().toBeNever();
    expectTypeOf<ValueConfigOf<Described<string>>>().toBeNever();
  });
});
