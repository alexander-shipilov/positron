import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { uppercase } from "./uppercase";

describe(`function ${uppercase.name}(value)`, () => {
  it("should convert the passed `value` to upper case", () => {
    expect(uppercase("foo")).toBe("FOO");
    expect(uppercase("FOO")).toBe("FOO");
    expect(uppercase("fooBar")).toBe("FOOBAR");
  });

  it("should return `Uppercase` type", () => {
    expectTypeOf(uppercase("foo")).toEqualTypeOf<Uppercase<"foo">>();
  });
});
