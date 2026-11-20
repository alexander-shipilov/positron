import { describe, expect, it } from "@jest/globals";

import type { Point } from "./point";
import { CharFlag } from "./char-flag";
import { getCharFlagsNonASCII } from "./get-char-flags-non-ascii";

describe(`function getCharFlagsNonASCII(code)`, () => {
  const ident = CharFlag.In | CharFlag.Is | CharFlag.Id;

  it("should return `CharFlag.No` if `code` is at the lower bound of a non-ident range", () => {
    expect(getCharFlagsNonASCII(0x80 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xb8 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xd7 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xf7 as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is at the lower bound of an ident range", () => {
    expect(getCharFlagsNonASCII(0xb7 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0xc0 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0xd8 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0xf8 as Point)).toBe(ident);
  });

  it("should return ident flags if `code` is inside an ident range", () => {
    expect(getCharFlagsNonASCII(0xe9 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x0410 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x4e2d as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is inside a non-ident range", () => {
    expect(getCharFlagsNonASCII(0x81 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0x2000 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xd800 as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is at the inclusive upper bound of an ident range", () => {
    expect(getCharFlagsNonASCII(0xd6 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0xf6 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x037d as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is one unit above an ident range", () => {
    expect(getCharFlagsNonASCII(0xd7 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xf7 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0x037e as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is ZWNJ or ZWJ", () => {
    expect(getCharFlagsNonASCII(0x200c as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x200d as Point)).toBe(ident);
  });

  it("should return ident flags if `code` is U+203F or U+2040", () => {
    expect(getCharFlagsNonASCII(0x203f as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x2040 as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is U+200E", () => {
    expect(getCharFlagsNonASCII(0x200e as Point)).toBe(CharFlag.No);
  });

  it("should return `CharFlag.No` if `code` is a surrogate", () => {
    expect(getCharFlagsNonASCII(0xd800 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xdfff as Point)).toBe(CharFlag.No);
  });

  it("should return `CharFlag.No` if `code` is a noncharacter", () => {
    expect(getCharFlagsNonASCII(0xfffe as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonASCII(0xffff as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is greater than or equal to U+10000", () => {
    expect(getCharFlagsNonASCII(0x10000 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x1f600 as Point)).toBe(ident);
    expect(getCharFlagsNonASCII(0x10ffff as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is at the code point limit", () => {
    expect(getCharFlagsNonASCII(0x110000 as Point)).toBe(CharFlag.No);
  });
});
