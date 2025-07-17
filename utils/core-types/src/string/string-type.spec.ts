import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { StringType } from "./string-type";

describe("StringType", () => {
  describe("type StringType", () => {
    it("should be 'string'", () => {
      expectTypeOf<StringType>().toEqualTypeOf<"string">();
    });
  });

  describe("const StringType", () => {
    it("should be the `StringType` type`", () => {
      expectTypeOf(StringType).toEqualTypeOf<StringType>();
    });

    it("should be `typeof <string>`", () => {
      expect(typeof {}).toBe(StringType);
    });
  });
});
