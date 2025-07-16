import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedProps } from "fixtures/mocks/PrefixedProps";
import type { PickPrefixedArray } from "src/types";

describe("PickPrefixedArray<TProps, TPrefix>", () => {
  it("should return a tuple type with properties which has `TPrefixes`", () => {
    expectTypeOf<
      PickPrefixedArray<PrefixedProps, ["foo", "ted"]>
    >().toEqualTypeOf<[{ bar?: unknown; baz: unknown }, { foo: unknown }]>();

    expectTypeOf<
      PickPrefixedArray<PrefixedProps, ["foo", "ted", "zoo"]>
    >().toEqualTypeOf<
      [{ bar?: unknown; baz: unknown }, { foo: unknown }, Record<never, never>]
    >();
  });
});
