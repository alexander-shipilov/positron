import { describe, expect, it } from "@jest/globals";

import { Exception } from "../exception/exception";

import { NeverException } from "./never-exception";

describe(`class ${NeverException.name}(message?)`, () => {
  it("should create an instance of `Exception`", () => {
    expect(new NeverException()).toBeInstanceOf(Exception);
  });

  it('should create an instance of `Exception` with name "NeverException"', () => {
    expect(new NeverException().name).toBe("NeverException");
  });

  it("should create an instance of `Error`", () => {
    expect(new NeverException()).toBeInstanceOf(Error);
  });
});
