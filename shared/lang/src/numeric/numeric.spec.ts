import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Numeric } from "./numeric";

describe("type Numeric", () => {
  it("should be \
      | `bigint` \
      | `number` \
      ", () => {
    expectTypeOf<Numeric>().toEqualTypeOf<
      | bigint //
      | number
    >();
  });
});
