import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NumericLike } from "./numeric-like";

describe("type NumericLike", () => {
  it("should be \
      | `bigint` \
      | `boolean` \
      | `number` \
      | `string` \
      ", () => {
    expectTypeOf<NumericLike>().toEqualTypeOf<
      | bigint //
      | boolean
      | number
      | string
    >();
  });
});
