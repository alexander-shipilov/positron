import { describe, it, expect } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Real } from "../real";

import { Integer } from "./integer";

describe("Integer", () => {
  it("should extend `number` but not vice versa", () => {
    expectTypeOf<Integer>().toExtend<number>();
    expectTypeOf<number>().not.toExtend<Integer>();
  });

  it("should extend `Real` but not vice versa", () => {
    expectTypeOf<Integer>().toExtend<Real>();
    expectTypeOf<Real>().not.toExtend<Integer>();
  });
});

describe("Integer(value)", () => {
  it("should return `value` if `value` is a safe integer", () => {
    expect(Integer(0)).toEqual(0);
    expect(Integer(Number.MAX_SAFE_INTEGER)).toEqual(Number.MAX_SAFE_INTEGER);
    expect(Integer(Number.MIN_SAFE_INTEGER)).toEqual(Number.MIN_SAFE_INTEGER);
  });

  it("should throw `SyntaxError` if `value` cannot be converted to an `Integer`", () => {
    expect(() => Integer("1.1")).toThrow(
      new SyntaxError("Cannot convert string \"1.1\" to an 'Integer'"),
    );
  });

  it("should throw `RangeError` if `value` is not an integer", () => {
    expect(() => Integer(1.1)).toThrow(
      new RangeError(
        "The number 1.1 cannot be converted to an 'Integer' because it is not a safe integer",
      ),
    );

    expect(() => Integer(1e-10)).toThrow(
      new RangeError(
        "The number 1e-10 cannot be converted to an 'Integer' because it is not a safe integer",
      ),
    );
  });

  it("should throw `RangeError` if `value` is not a safe integer", () => {
    expect(() => Integer(Number.MAX_SAFE_INTEGER + 1)).toThrow(
      new RangeError(
        "The number 9007199254740992 cannot be converted to an 'Integer' because it is not a safe integer",
      ),
    );

    expect(() => Integer(Number.MIN_SAFE_INTEGER - 1)).toThrow(
      new RangeError(
        "The number -9007199254740992 cannot be converted to an 'Integer' because it is not a safe integer",
      ),
    );
  });
});
