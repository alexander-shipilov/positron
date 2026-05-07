import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { capitalize } from "./capitalize";

describe("capitalize(value)", () => {
  it("should capitalize the passed `value`", () => {
    expect(capitalize("foo")).toBe("Foo");
    expect(capitalize("FOO")).toBe("FOO");
    expect(capitalize("fooBar")).toBe("Fb");
  });

  it("should return `Capitalize` type", () => {
    expectTypeOf(capitalize("foo")).toEqualTypeOf<Capitalize<"foo">>();
  });
});
