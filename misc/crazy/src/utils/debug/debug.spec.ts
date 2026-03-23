import { describe, it, expect } from "@jest/globals";

import { debug } from "./debug";

describe(`${debug.name}(value)`, () => {
  it("should return the 'string \"value\"'", () => {
    expect(debug("")).toBe('string ""');
    expect(debug("'")).toBe('string "\'"');
    expect(debug('"')).toBe('string "\\""');
  });

  it("should return 'boolean true' or 'boolean false' if `value` is a boolean", () => {
    expect(debug(true)).toBe("boolean true");
    expect(debug(false)).toBe("boolean false");
  });

  it(`should return 'number value' if \`value\` is a finite number`, () => {
    expect(debug(1)).toBe("number 1");
    expect(debug(1e1)).toBe("number 10");
    expect(debug(1e100)).toBe("number 1e+100");
    expect(debug(1e-1)).toBe("number 0.1");
    expect(debug(1e-100)).toBe("number 1e-100");
  });

  it("should return 'number NaN' if `value` is `NaN`", () => {
    expect(debug(NaN)).toBe("number NaN");
  });

  it("should return 'number Infinity' or 'number -Infinity' if `value` is not a finite number", () => {
    expect(debug(Infinity)).toBe("number Infinity");
    expect(debug(-Infinity)).toBe("number -Infinity");
  });

  it("should return 'bigint (value)n' if `value` is a bigint", () => {
    expect(debug(0n)).toBe("bigint 0n");
    expect(debug(1n)).toBe("bigint 1n");
  });

  it("should return 'null' if `value` is `null`", () => {
    expect(debug(null)).toBe("null");
  });

  it("should return 'undefined' if `value` is undefined", () => {
    expect(debug(undefined)).toBe("undefined");
  });

  it("should return 'object' if `value` is an object", () => {
    expect(debug({})).toBe("object");
    expect(debug([])).toBe("object");
  });

  it("should return 'function' if `value` is a function", () => {
    expect(debug(() => null)).toBe("function");
  });
});
