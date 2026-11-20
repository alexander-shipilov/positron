import { assert, template } from "@positron/lang";

/**
 * @public
 */
export class QRing {
  /**
   *
   */
  public readonly mod: bigint;

  /**
   * @param mod -
   */
  public constructor(mod: bigint) {
    assert(
      mod > 1n,
      () =>
        new RangeError(
          template`Unable to construct Q-Ring of ${0} elements`(mod),
        ),
    );

    this.mod = mod;
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  public add(arg1: bigint, arg2: bigint): bigint {
    return this.element(arg1 + arg2);
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  public div(arg1: bigint, arg2: bigint): bigint {
    return this.mul(arg1, this.inv(arg2));
  }

  /**
   * @param value -
   */
  public element(value: bigint): bigint {
    const { mod } = this;

    return ((value % mod) + mod) % mod;
  }

  /**
   * @param arg -
   */
  public inv(arg: bigint): bigint {
    let [r, s, x1, x2, y1, y2] = [arg, this.mod, 1n, 0n, 0n, 1n];

    while (s !== 0n) {
      const q = r / s;

      [r, s, x1, x2, y1, y2] = [s, r - s * q, x2, x1 - x2 * q, y2, y1 - y2 * q];
    }

    assert(r === 1n, () => new RangeError("Division by ZERO"));

    return this.element(x1);
  }

  /**
   * @param arg -
   */
  public isZeroDivisor(arg: bigint): boolean {
    let arg1 = arg;
    let arg2: bigint = this.mod;

    while (arg2 !== 1n) {
      [arg1, arg2] = [arg2, arg1 % arg2];
    }

    return arg1 !== 1n;
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  public mul(arg1: bigint, arg2: bigint): bigint {
    return this.element(arg1 * arg2);
  }

  /**
   * @param arg1 -
   * @param arg2 -
   */
  public sub(arg1: bigint, arg2: bigint): bigint {
    return this.element(arg1 - arg2);
  }
}
