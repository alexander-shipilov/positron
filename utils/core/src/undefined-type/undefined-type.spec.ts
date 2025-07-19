import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { UndefinedType } from "./undefined-type";
import { UNDEFINED_TYPE } from "./undefined-type";

describe("UndefinedType", () => {
  it("should be 'undefined'", () => {
    expectTypeOf<UndefinedType>().toEqualTypeOf<"undefined">();
  });
});

describe("UNDEFINED_TYPE", () => {
  it("should be the `UndefinedType` type`", () => {
    expectTypeOf(UNDEFINED_TYPE).toEqualTypeOf<UndefinedType>();
  });

  it("should be `typeof undefined`", () => {
    expect(typeof undefined).toBe(UNDEFINED_TYPE);
  });
});
