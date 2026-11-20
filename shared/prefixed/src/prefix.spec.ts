import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Prefix } from "./prefix";

describe(`type Prefix`, () => {
  it("should be a `string`", () => {
    expectTypeOf<Prefix>().toEqualTypeOf<string>();
  });
});
