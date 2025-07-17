import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { EmptyObject } from "./empty-object";

describe("type EmptyObject", () => {
  it("should be `Record<never, unknown>`", () => {
    expectTypeOf<EmptyObject>().toEqualTypeOf<Record<never, unknown>>();
  });
});
