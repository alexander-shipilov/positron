import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { error } from "./error";
import type { ErrorParams } from "./error-params";

describe("type ErrorParams", () => {
  it("should be equal to `Parameters<typeof error>`", () => {
    expectTypeOf<ErrorParams>().toEqualTypeOf<Parameters<typeof error>>();
  });
});
