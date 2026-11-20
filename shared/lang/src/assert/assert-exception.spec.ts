import { describe, expect, it } from "@jest/globals";

import { Exception } from "../exception/exception";

import { AssertException } from "./assert-exception";

describe(`class ${AssertException.name}(message?)`, () => {
  it("should create an instance of `Exception`", () => {
    expect(new AssertException()).toBeInstanceOf(Exception);
  });

  it('should create an instance of `Exception` with name "AssertException"', () => {
    expect(new AssertException().name).toBe("AssertException");
  });

  it("should create an instance of `Error`", () => {
    expect(new AssertException()).toBeInstanceOf(Error);
  });
});
