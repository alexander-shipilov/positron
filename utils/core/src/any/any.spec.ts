import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Any } from "./any";

describe("Any", () => {
  it("should be `any` type", () => {
    expectTypeOf<Any>().toBeAny();
  });
});
