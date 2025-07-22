import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Metadata } from "./metadata";
import type { MetadataConfig } from "./metadata-config";
import type { MetadataConfigOf } from "./metadata-config-of";

describe("MetadataConfigOf<T>", () => {
  it("should return { value: T, meta: never } if `T` is Metadata<V> ", () => {
    type T1 = Metadata<string>;
    expectTypeOf<MetadataConfigOf<T1>>().toEqualTypeOf<
      MetadataConfig<string, never>
    >();
  });

  it("should return { value: T, meta: M } if `T` is Metadata<V, M> ", () => {
    type T1 = Metadata<string, { foo: 1 }>;
    expectTypeOf<MetadataConfigOf<T1>>().toEqualTypeOf<
      MetadataConfig<string, { foo: 1 }>
    >();
  });

  it("should return `never` if no property descriptor assigned to the `T`", () => {
    expectTypeOf<MetadataConfigOf<string>>().toBeNever();
  });
});
