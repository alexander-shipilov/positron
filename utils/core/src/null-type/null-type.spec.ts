import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { NullType } from "./null-type";
import { NULL_TYPE } from "./null-type";

describe("NULL_TYPE", () => {
  it("should be the 'null'", () => {
    expect(NULL_TYPE).toBe("null");
  });
});

describe("NullType", () => {
  it("should be `typeof NULL_TYPE`", () => {
    expectTypeOf<NullType>().toEqualTypeOf<typeof NULL_TYPE>();
  });
});
