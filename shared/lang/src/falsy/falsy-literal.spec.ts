import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { FalsyLiteral } from "./falsy-literal";

describe("type FalsyLiteral", () => {
  it('should be \
      | `""` \
      | `0` \
      | `0n` \
      | `false` \
      | `null` \
      | `undefined` \
      ', () => {
    expectTypeOf<FalsyLiteral>().toEqualTypeOf<
      | "" //
      | 0
      | 0n
      | false
      | null
      | undefined
    >();
  });
});
