import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ErrorLike } from "./error-like";
import type { ErrorMessage } from "./error-message";

describe("type ErrorMessage", () => {
  it("should be \
      | `(() => ErrorLike)` \
      | `ErrorLike` \
      ", () => {
    expectTypeOf<ErrorMessage>().toEqualTypeOf<
      | (() => ErrorLike) //
      | ErrorLike
    >();
  });
});
