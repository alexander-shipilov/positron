import { describe, expect, it } from "@jest/globals";

import type { Point } from "./point";
import { CharFlag } from "./char-flag";
import { getCharFlagsNonAscii } from "./get-char-flags-non-ascii";

describe(`function getCharFlagsNonAscii(code)`, () => {
  const ident = CharFlag.In | CharFlag.Is | CharFlag.Id;

  it("should return `CharFlag.No` if `code` is at the lower bound of a non-ident range", () => {
    expect(getCharFlagsNonAscii(0x80 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xb8 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xd7 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xf7 as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is at the lower bound of an ident range", () => {
    expect(getCharFlagsNonAscii(0xb7 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0xc0 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0xd8 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0xf8 as Point)).toBe(ident);
  });

  it("should return ident flags if `code` is inside an ident range", () => {
    expect(getCharFlagsNonAscii(0xe9 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x0410 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x4e2d as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is inside a non-ident range", () => {
    expect(getCharFlagsNonAscii(0x81 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0x2000 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xd800 as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is at the inclusive upper bound of an ident range", () => {
    expect(getCharFlagsNonAscii(0xd6 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0xf6 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x037d as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is one unit above an ident range", () => {
    expect(getCharFlagsNonAscii(0xd7 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xf7 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0x037e as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is ZWNJ or ZWJ", () => {
    expect(getCharFlagsNonAscii(0x200c as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x200d as Point)).toBe(ident);
  });

  it("should return ident flags if `code` is U+203F or U+2040", () => {
    expect(getCharFlagsNonAscii(0x203f as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x2040 as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is U+200E", () => {
    expect(getCharFlagsNonAscii(0x200e as Point)).toBe(CharFlag.No);
  });

  it("should return `CharFlag.No` if `code` is a surrogate", () => {
    expect(getCharFlagsNonAscii(0xd800 as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xdfff as Point)).toBe(CharFlag.No);
  });

  it("should return `CharFlag.No` if `code` is a noncharacter", () => {
    expect(getCharFlagsNonAscii(0xfffe as Point)).toBe(CharFlag.No);
    expect(getCharFlagsNonAscii(0xffff as Point)).toBe(CharFlag.No);
  });

  it("should return ident flags if `code` is greater than or equal to U+10000", () => {
    expect(getCharFlagsNonAscii(0x10000 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x1f600 as Point)).toBe(ident);
    expect(getCharFlagsNonAscii(0x10ffff as Point)).toBe(ident);
  });

  it("should return `CharFlag.No` if `code` is at the code point limit", () => {
    expect(getCharFlagsNonAscii(0x110000 as Point)).toBe(CharFlag.No);
  });
});
