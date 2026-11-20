import { describe, expect, it } from "@jest/globals";

import type { Point } from "./point";
import { CodePointObject } from "./code-point-object";

describe(`class CodePointObject`, () => {
  describe(`new(value)`, () => {
    it("should create an instance if `value` is a BMP code point", () => {
      expect(new CodePointObject(0x41 as Point)).toBeInstanceOf(
        CodePointObject,
      );
    });

    it("should create an instance if `value` is an astral code point", () => {
      expect(new CodePointObject(0x1f600 as Point)).toBeInstanceOf(
        CodePointObject,
      );
    });

    it("should create an instance if `value` is U+0000 (NULL)", () => {
      expect(new CodePointObject(0x00 as Point)).toBeInstanceOf(
        CodePointObject,
      );
    });
  });

  describe(`.value`, () => {
    it("should be equal to the constructor `value` argument", () => {
      expect(new CodePointObject(0x41 as Point).value).toBe(0x41);
      expect(new CodePointObject(0x1f600 as Point).value).toBe(0x1f600);
      expect(new CodePointObject(0x00 as Point).value).toBe(0);
    });
  });

  describe(`.length`, () => {
    it("should be `1` if `value` is in the BMP (U+0000 to U+FFFF)", () => {
      expect(new CodePointObject(0x00 as Point).length).toBe(1);
      expect(new CodePointObject(0x41 as Point).length).toBe(1);
      expect(new CodePointObject(0xffff as Point).length).toBe(1);
    });

    it("should be `2` if `value` is an astral code point (U+10000 or greater)", () => {
      expect(new CodePointObject(0x10000 as Point).length).toBe(2);
      expect(new CodePointObject(0x1f600 as Point).length).toBe(2);
      expect(new CodePointObject(0x10ffff as Point).length).toBe(2);
    });
  });
});
