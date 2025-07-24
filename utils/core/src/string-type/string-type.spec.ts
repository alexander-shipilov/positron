import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { StringType } from "./string-type";
import { STRING_TYPE } from "./string-type";

describe("STRING_TYPE", () => {
  it("should be `typeof <string>`", () => {
    expect(typeof "").toBe(STRING_TYPE);
  });
});

describe("StringType", () => {
  it("should be `typeof STRING_TYPE`", () => {
    expectTypeOf<StringType>().toEqualTypeOf<typeof STRING_TYPE>();
  });
});
