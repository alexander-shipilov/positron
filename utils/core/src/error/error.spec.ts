import { describe, expect, it } from "@jest/globals";

import { error } from "./error";

describe("error(message, Class)", () => {
  it("should return `new Error(message)` if `message` is string or omitted", () => {
    expect(error()).toEqual(new Error());
    expect(error("message")).toEqual(new Error("message"));
  });

  it(
    "should return `new Class(message)` if `message` is string" + //
      " or omitted and `Class` passed",
    () => {
      expect(error(undefined, SyntaxError)).toEqual(new SyntaxError());
      expect(error("message", SyntaxError)).toEqual(new SyntaxError("message"));
    },
  );
});
