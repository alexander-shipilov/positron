import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { IndexKeyLike } from "./index-key-like";

describe("type IndexKeyLike", () => {
  it("should be `\
      | `number` \
      | `string` \
      ", () => {
    expectTypeOf<IndexKeyLike>().toEqualTypeOf<
      | number //
      | string
    >();
  });
});
