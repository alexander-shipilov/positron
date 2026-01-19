import { describe, it, expect } from "@jest/globals";

import { debug } from "./debug";

describe(`${debug.name}(value)`, () => {
  it("should return the `value` enclosed in double quotes if `value` is a string", () => {
    expect(debug("")).toBe('""');
    expect(debug("'")).toBe('"\'"');
    expect(debug('"')).toBe('"\\""');
  });

  it("should return 'true' or 'false' if `value` is a boolean", () => {
    expect(debug(true)).toBe("true");
    expect(debug(false)).toBe("false");
  });

  it("should return `value` if `value` is a finite number", () => {
    expect(debug(1)).toBe("1");
    expect(debug(1e1)).toBe("10");
    expect(debug(1e100)).toBe("1e+100");
    expect(debug(1e-1)).toBe("0.1");
    expect(debug(1e-100)).toBe("1e-100");
  });

  it("should return 'NaN' if `value` is `NaN`", () => {
    expect(debug(NaN)).toBe("NaN");
  });

  it("should return 'Infinity' or '-Infinity' if `value` is not a finite number", () => {
    expect(debug(Infinity)).toBe("Infinity");
    expect(debug(-Infinity)).toBe("-Infinity");
  });

  it("should return `String(value)n` if `value` is a bigint", () => {
    expect(debug(1n)).toBe("1n");
    expect(debug(0n)).toBe("0n");
  });

  it("should return 'null' if `value` is `null`", () => {
    expect(debug(null)).toBe("null");
  });

  it("should return 'null' if `value` is `null`", () => {
    expect(debug(null)).toBe("null");
  });
});
