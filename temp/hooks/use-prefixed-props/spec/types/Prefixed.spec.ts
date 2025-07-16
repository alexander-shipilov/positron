import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Props } from "fixtures/mocks/Props";
import type { Prefixed } from "src/types";

describe("Prefixed<TProps, TPrefix>", () => {
  it("should add `TPrefix` to all properties of `TProps`", () => {
    expectTypeOf<Prefixed<Props, "foo">>().toEqualTypeOf<{
      "foo-bar"?: number;
      "foo-baz": number;
    }>();

    expectTypeOf<Prefixed<Prefixed<Props, "foo">, "bar">>().toEqualTypeOf<{
      "bar-foo-bar"?: number;
      "bar-foo-baz": number;
    }>();
  });
});
