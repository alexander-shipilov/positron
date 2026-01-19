import { describe, expect, it } from "@jest/globals";

import { never } from "./never";
import { NeverException } from "./never-exception";

describe("never(message, Class)", () => {
  it("should throw `new NeverError('Never exception')` if `message` is omitted", () => {
    expect(() => never()).toThrow(new NeverException("Never exception"));
  });

  it("should throw `new NeverError(message)` if `message` is a string", () => {
    expect(() => never("message")).toThrow(new NeverException("message"));
  });

  it("should throw an instance of `Class` if `message` is a string and the `Class` parameter is passed", () => {
    expect(() => never("message", SyntaxError)).toThrow(
      new SyntaxError("message"),
    );
  });

  it("should throw `message` if `message` is an instance of `Error`", () => {
    expect(() => never(new SyntaxError("message"))).toThrow(
      new SyntaxError("message"),
    );
  });
});
