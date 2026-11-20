import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { lowercase } from "./lowercase";

describe(`function ${lowercase.name}(value)`, () => {
  it("should convert the passed `value` to lower case", () => {
    expect(lowercase("foo")).toBe("foo");
    expect(lowercase("FOO")).toBe("foo");
    expect(lowercase("fooBar")).toBe("foobar");
  });

  it("should return `Lowercase` type", () => {
    expectTypeOf(lowercase("foo")).toEqualTypeOf<Lowercase<"foo">>();
  });
});
