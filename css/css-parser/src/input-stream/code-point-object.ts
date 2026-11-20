import type { Optional } from "@positron/lang";

import type { CodePoint } from "./code-point";
import type { Point } from "./point";
import { CharFlag } from "./char-flag";
import { getCharFlags } from "./get-char-flags";

/**
 * @internal
 */
export class CodePointObject implements CodePoint {
  public readonly value: Point;

  #flags: Optional<number> = undefined;

  protected get flags(): number {
    return this.#flags ?? (this.#flags = getCharFlags(this.value));
  }

  /**
   * {@inheritDoc CodePoint.isDigit}
   */
  public get isDigit(): boolean {
    return (this.flags & CharFlag.Di) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isHexDigit}
   */
  public get isHexDigit(): boolean {
    return (this.flags & CharFlag.Hd) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isIdent}
   */
  public get isIdent(): boolean {
    return (this.flags & CharFlag.Id) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isIdentStart}
   */
  public get isIdentStart(): boolean {
    return (this.flags & CharFlag.Is) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isLetter}
   */
  public get isLetter(): boolean {
    return (this.flags & CharFlag.Le) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isLowercaseLetter}
   */
  public get isLowercaseLetter(): boolean {
    return (this.flags & CharFlag.Ll) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isNewline}
   */
  public get isNewline(): boolean {
    return (this.flags & CharFlag.Nl) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isNonASCIIIdent}
   */
  public get isNonASCIIIdent(): boolean {
    return (this.flags & CharFlag.In) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isNonPrintable}
   */
  public get isNonPrintable(): boolean {
    return (this.flags & CharFlag.Np) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isUppercaseLetter}
   */
  public get isUppercaseLetter(): boolean {
    return (this.flags & CharFlag.Ul) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.isWhitespace}
   */
  public get isWhitespace(): boolean {
    return (this.flags & CharFlag.Ws) !== 0;
  }

  /**
   * {@inheritDoc CodePoint.length}
   */
  public get length(): number {
    return this.value > 0xffff ? 2 : 1;
  }

  /**
   * @param value - The Unicode code point value.
   */
  public constructor(value: Point) {
    this.value = value;
  }

  public toString(): string {
    return String.fromCodePoint(this.value);
  }
}
