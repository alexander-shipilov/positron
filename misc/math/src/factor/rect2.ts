import type { QRing } from "./q-ring";
import { Square2 } from "./square2";

export class Rect2 {
  /**
   *
   */
  public readonly x: bigint;

  /**
   *
   */
  public readonly y: bigint;

  /**
   *
   */
  protected readonly r: QRing;

  /**
   * @param sqr2 -
   */
  public constructor(sqr2: Square2) {
    const { r } = sqr2;

    this.r = r;
    this.x = r.element(sqr2.x - r.inv(2n));
    this.y = r.element(sqr2.y - r.inv(2n));
  }

  /**
   *
   * @param that -
   */
  public mul(that: Rect2): Rect2 {
    const { r } = this;

    return new Rect2(
      new Square2(r, this.x + r.inv(2n), this.y + r.inv(2n))
        .mul(new Square2(r, that.x + r.inv(2n), that.y + r.inv(2n)))
        .mul(new Square2(r, 1n, 1n)),
    );
  }

  /**
   *
   */
  public value(): bigint {
    return this.r.element(this.x * (this.x + 1n) + this.y * (this.y + 1n));
  }

  /**
   *
   */
  public x2(): bigint {
    return this.r.element(this.x * (this.x + 1n));
  }

  /**
   *
   */
  public y2(): bigint {
    return this.r.element(this.y * (this.y + 1n));
  }
}
