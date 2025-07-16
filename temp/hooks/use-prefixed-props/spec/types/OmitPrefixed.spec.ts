import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { PrefixedProps } from "fixtures/mocks/PrefixedProps";
import type { OmitPrefixed } from "src/types";

describe("OmitPrefixed<TProps, TPrefix>", () => {
  it("should extract properties with `TPrefix`", () => {
    expectTypeOf<OmitPrefixed<PrefixedProps, "foo">>().toEqualTypeOf<{
      foo: unknown;
      ted: unknown;
      "ted-foo": unknown;
    }>();
  });
});
