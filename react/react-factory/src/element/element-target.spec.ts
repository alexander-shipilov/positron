import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { DescribedTarget } from "../described";

import type { ElementTarget } from "./element-target";

describe("ElementTarget", () => {
  it("should be `DescribedTarget`", () => {
    expectTypeOf<ElementTarget>().toEqualTypeOf<DescribedTarget>();
  });
});
