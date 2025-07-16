import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedProps } from "fixtures/mocks/PrefixedProps";
import type { PickPrefixed } from "src/types";

describe("PickPrefixed<TProps, TPrefix>", () => {
  it("should extract properties with `TPrefix`", () => {
    expectTypeOf<PickPrefixed<PrefixedProps, "foo">>().toEqualTypeOf<{
      bar?: unknown;
      baz: unknown;
    }>();
  });

  it("should return an empty `Record` if no one property of `TProps` has `TPrefix`", () => {
    expectTypeOf<PickPrefixed<PrefixedProps, "zoo">>().toEqualTypeOf<
      Record<never, never>
    >();
  });
});
