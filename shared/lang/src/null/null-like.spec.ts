import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NullLike } from "./null-like";

describe("type NullLike", () => {
  it("should be `\
      | `null` \
      | `undefined` \
      ", () => {
    expectTypeOf<NullLike>().toEqualTypeOf<
      | null //
      | undefined
    >();
  });
});
