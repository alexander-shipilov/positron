import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedProps } from "fixtures/mocks/PrefixedProps";
import type { OmitPrefixedArray } from "src/types";

describe("OmitPrefixedArray<TProps, TPrefixes>", () => {
  it("should remove all from `TProps` properties with `TPrefixes`", () => {
    expectTypeOf<
      OmitPrefixedArray<PrefixedProps, ["foo", "ted"]>
    >().toEqualTypeOf<{ foo: unknown; ted: unknown }>();
  });
});
