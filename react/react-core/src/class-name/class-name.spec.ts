import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ClassName } from "./class-name";

describe(`ClassName`, () => {
  it("`ClassName` should match a `string`", () => {
    expectTypeOf<ClassName>().toExtend<string>();
  });

  it("`string` should not match `ClassName`", () => {
    expectTypeOf<string>().not.toExtend<ClassName>();
  });
});
