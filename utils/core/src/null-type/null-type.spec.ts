import { describe, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NullType } from "./null-type";
import { NULL_TYPE } from "./null-type";

describe("NullType", () => {
  it("should be 'null'", () => {
    expectTypeOf<NullType>().toEqualTypeOf<"null">();
  });
});

describe("NULL_TYPE", () => {
  it("should be the `NullType` type`", () => {
    expectTypeOf(NULL_TYPE).toEqualTypeOf<NullType>();
  });
});
