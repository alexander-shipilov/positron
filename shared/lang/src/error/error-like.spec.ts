import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ErrorLike } from "./error-like";

describe("type ErrorLike", () => {
  it("should be \
      | `Error` \
      | `string` \
      | `undefined` \
      ", () => {
    expectTypeOf<ErrorLike>().toEqualTypeOf<
      | string
      | Error //
      | undefined
    >();
  });
});
