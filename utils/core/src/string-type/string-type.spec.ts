import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { StringType } from "./string-type";
import { STRING_TYPE } from "./string-type";

describe("StringType", () => {
  it("should be 'string'", () => {
    expectTypeOf<StringType>().toEqualTypeOf<"string">();
  });
});

describe("STRING_TYPE", () => {
  it("should be the `StringType` type`", () => {
    expectTypeOf(STRING_TYPE).toEqualTypeOf<StringType>();
  });

  it("should be `typeof <string>`", () => {
    expect(typeof {}).toBe(STRING_TYPE);
  });
});
