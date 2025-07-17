import type { PropertyName } from "@positron/core";
import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Prefix } from "./prefix";

describe(`Prefix`, () => {
  it("should be a `PropertyName`", () => {
    expectTypeOf<Prefix>().toExtend<PropertyName>();
  });
});
