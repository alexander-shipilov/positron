import { it } from "@jest/globals";
import { describe } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { LiteralString } from "./literal-string";

describe("LiteralString", () => {
  it("should not be the `string` type", () => {
    expectTypeOf<LiteralString>().not.toEqualTypeOf<string>();
  });

  it("should extend the `string` type", () => {
    expectTypeOf<LiteralString>().toExtend<string>();
  });

  it("should not match the `string` type", () => {
    expectTypeOf<string>().not.toExtend<LiteralString>();
    expectTypeOf<`${string}`>().not.toExtend<LiteralString>();
  });

  it("should match any defined string", () => {
    expectTypeOf<"">().toExtend<LiteralString>();
    expectTypeOf<"a">().toExtend<LiteralString>();
    expectTypeOf<"AtoB">().toExtend<LiteralString>();
  });
});
