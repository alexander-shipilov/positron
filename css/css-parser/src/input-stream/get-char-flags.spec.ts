import { describe, expect, it } from "@jest/globals";

import type { Point } from "./point";
import { CharFlag } from "./char-flag";
import { getCharFlags } from "./get-char-flags";

describe(`function getCharFlags(code)`, () => {
  it("should return `CharFlag.Np` if `code` is an ASCII non-printable control", () => {
    expect(getCharFlags(0x00 as Point)).toBe(CharFlag.Np);
    expect(getCharFlags(0x07 as Point)).toBe(CharFlag.Np);
    expect(getCharFlags(0x0b as Point)).toBe(CharFlag.Np);
    expect(getCharFlags(0x7f as Point)).toBe(CharFlag.Np);
  });

  it("should return `CharFlag.Ws` if `code` is SPACE or TAB", () => {
    expect(getCharFlags(0x20 as Point)).toBe(CharFlag.Ws);
    expect(getCharFlags(0x09 as Point)).toBe(CharFlag.Ws);
  });

  it("should return `CharFlag.Nl | CharFlag.Ws` if `code` is LINE FEED", () => {
    expect(getCharFlags(0x0a as Point)).toBe(CharFlag.Nl | CharFlag.Ws);
  });

  it("should return `CharFlag.No` if `code` is CARRIAGE RETURN or FORM FEED", () => {
    expect(getCharFlags(0x0d as Point)).toBe(CharFlag.No);
    expect(getCharFlags(0x0c as Point)).toBe(CharFlag.No);
  });

  it("should return digit flags if `code` is an ASCII digit", () => {
    const expected = CharFlag.Di | CharFlag.Hd | CharFlag.Id;

    expect(getCharFlags(0x30 as Point)).toBe(expected);
    expect(getCharFlags(0x39 as Point)).toBe(expected);
  });

  it("should return uppercase hex letter flags if `code` is A-F", () => {
    const expected =
      CharFlag.Hd | CharFlag.Ul | CharFlag.Le | CharFlag.Is | CharFlag.Id;

    expect(getCharFlags(0x41 as Point)).toBe(expected);
    expect(getCharFlags(0x46 as Point)).toBe(expected);
  });

  it("should return uppercase non-hex letter flags if `code` is G-Z", () => {
    const expected = CharFlag.Ul | CharFlag.Le | CharFlag.Is | CharFlag.Id;

    expect(getCharFlags(0x47 as Point)).toBe(expected);
    expect(getCharFlags(0x5a as Point)).toBe(expected);
  });

  it("should return lowercase hex letter flags if `code` is a-f", () => {
    const expected =
      CharFlag.Hd | CharFlag.Ll | CharFlag.Le | CharFlag.Is | CharFlag.Id;

    expect(getCharFlags(0x61 as Point)).toBe(expected);
    expect(getCharFlags(0x66 as Point)).toBe(expected);
  });

  it("should return lowercase non-hex letter flags if `code` is g-z", () => {
    const expected = CharFlag.Ll | CharFlag.Le | CharFlag.Is | CharFlag.Id;

    expect(getCharFlags(0x67 as Point)).toBe(expected);
    expect(getCharFlags(0x7a as Point)).toBe(expected);
  });

  it("should return `CharFlag.Id` if `code` is HYPHEN-MINUS", () => {
    expect(getCharFlags(0x2d as Point)).toBe(CharFlag.Id);
  });

  it("should return `CharFlag.Is | CharFlag.Id` if `code` is LOW LINE", () => {
    expect(getCharFlags(0x5f as Point)).toBe(CharFlag.Is | CharFlag.Id);
  });

  it("should return `CharFlag.No` if `code` is an ASCII punctuation not used in identifiers", () => {
    expect(getCharFlags(0x7b as Point)).toBe(CharFlag.No);
    expect(getCharFlags(0x3b as Point)).toBe(CharFlag.No);
    expect(getCharFlags(0x22 as Point)).toBe(CharFlag.No);
  });

  it("should delegate to non-ASCII flags if `code` is greater than or equal to 0x80", () => {
    expect(getCharFlags(0x80 as Point)).toBe(CharFlag.No);
    expect(getCharFlags(0xb7 as Point)).toBe(
      CharFlag.In | CharFlag.Is | CharFlag.Id,
    );
    expect(getCharFlags(0x1f600 as Point)).toBe(
      CharFlag.In | CharFlag.Is | CharFlag.Id,
    );
  });

  it("should return `CharFlag.No` if `code` is at the code point limit", () => {
    expect(getCharFlags(0x110000 as Point)).toBe(CharFlag.No);
  });
});
