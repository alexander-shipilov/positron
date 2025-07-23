import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UndefinedType } from "./undefined-type";
import { UNDEFINED_TYPE } from "./undefined-type";

describe("UNDEFINED_TYPE", () => {
  it("should be `typeof <undefined>`", () => {
    expect(typeof undefined).toBe(UNDEFINED_TYPE);
  });
});

describe("UndefinedType", () => {
  it("should be `typeof UNDEFINED_TYPE`", () => {
    expectTypeOf<UndefinedType>().toEqualTypeOf<typeof UNDEFINED_TYPE>();
  });
});
