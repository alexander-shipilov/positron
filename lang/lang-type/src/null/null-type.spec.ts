import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { NullType } from "./null-type";

describe("NullType", () => {
  describe("type NullType", () => {
    it("should be 'null'", () => {
      expectTypeOf<NullType>().toEqualTypeOf<"null">();
    });
  });

  describe("const NullType", () => {
    it("should be the `NullType` type`", () => {
      expectTypeOf(NullType).toEqualTypeOf<NullType>();
    });
  });
});
