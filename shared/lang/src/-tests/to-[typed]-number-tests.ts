import { expect, it } from "@jest/globals";

import type { NumericLike } from "../numeric/numeric-like";
import { toBigint } from "../bigint/to-bigint";
import { isIntegerNumber } from "../number/is-integer-number";
import { toString } from "../string/to-string";

/**
 * @internal
 */
export function toTypedNumberTests(
  toTypedNumber: (value: NumericLike) => number,
  typeName: string,
  valid: number[],
  invalid: number[],
) {
  const validNumbers = [
    0, //
    ...valid,
  ];

  const invalidNumbers = [
    Number.NaN, //
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    ...invalid,
  ];

  const validValues = [
    ...validNumbers.map(toString),
    ...validNumbers.filter(isIntegerNumber).map(toBigint),
    "",
  ];

  const invalidValues = [
    ...invalidNumbers.map(toString),
    ...invalidNumbers.filter(isIntegerNumber).map(toBigint),
    2n ** 10000n,
    -(2n ** 10000n),
    "0a",
    "a",
  ];

  it("should return `0` if `value` is `-0`", () => {
    expect(toTypedNumber(-0)).toBe(0);
  });

  it(`should return \`value\` if \`value\` is ${typeName} number`, () => {
    validNumbers.forEach((value) => {
      expect(toTypedNumber(value)).toBe(value);
    });
  });

  it("should return `0` if `value` is `false`", () => {
    expect(toTypedNumber(false)).toBe(0);
  });

  it("should return `1` if `value` is `true`", () => {
    expect(toTypedNumber(true)).toBe(1);
  });

  it('should return `0` if `value` is `""`', () => {
    expect(toTypedNumber("")).toBe(0);
  });

  it(`should return \`Number(value)\` if \`value\` can be converted to ${typeName} number`, () => {
    validValues.forEach((value) => {
      expect(toTypedNumber(toString(value))).toBe(Number(value));
    });
  });

  it(`should throw \`RangeError\` if \`value\` is not ${typeName} number`, () => {
    invalidNumbers.forEach((value) => {
      expect(() => toTypedNumber(value)).toThrow(RangeError);
    });
  });

  it(`should throw \`SyntaxError\` if \`value\` cannot be converted to ${typeName} number`, () => {
    invalidValues.forEach((value) => {
      expect(() => toTypedNumber(value)).toThrow(SyntaxError);
    });
  });
}
