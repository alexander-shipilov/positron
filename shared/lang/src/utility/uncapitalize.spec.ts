import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { uncapitalize } from "./uncapitalize";

describe(`function ${uncapitalize.name}(value)`, () => {
  it("should uncapitalize the passed `value`", () => {
    expect(uncapitalize("Foo")).toBe("foo");
    expect(uncapitalize("FOO")).toBe("fOO");
    expect(uncapitalize("FooBar")).toBe("fooBar");
  });

  it("should return `Uncapitalize` type", () => {
    expectTypeOf(uncapitalize("Foo")).toEqualTypeOf<Uncapitalize<"Foo">>();
  });
});
