import type { QRing } from "./q-ring";

export class Square2 {
  /**
   *
   */
  public readonly r: QRing;

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
   * @param ring -
   * @param x -
   * @param y -
   */
  public constructor(ring: QRing, x: bigint, y: bigint) {
    this.r = ring;
    this.x = ring.element(x);
    this.y = ring.element(y);
  }

  /**
   *
   * @param that -
   */
  public mul(that: Square2): Square2 {
    return new Square2(
      this.r,
      this.x * that.x - this.y * that.y,
      this.x * that.y + this.y * that.x,
    );
  }

  /**
   *
   */
  public value(): bigint {
    return this.r.element(this.x ** 2n + this.y ** 2n);
  }

  /**
   *
   */
  public x2(): bigint {
    return this.r.element(this.x ** 2n);
  }

  /**
   *
   */
  public y2(): bigint {
    return this.r.element(this.y ** 2n);
  }
}
