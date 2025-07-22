import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { DescribedTarget } from "../described";

import type { ValueTarget } from "./value-target";

describe("ValueTarget", () => {
  it("should be `DescribedTarget`", () => {
    expectTypeOf<ValueTarget>().toEqualTypeOf<DescribedTarget>();
  });
});
