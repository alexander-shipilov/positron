import { IntegerLike } from "./IntegerLike";


abstract class QRing<Integer extends bigint> {
  abstract readonly ZERO: Integer

  abstract readonly ONE: Integer

  protected constructor(readonly mod: Integer) {
    this.mod = mod;
  }

  abstract element(value: IntegerLike): Integer

  isZeroDivisor(x: IntegerLike) {
    const { mod, ZERO, ONE } = this;

    let num1 = this.element(x);
    let num2: Integer = mod;

    while (num2 !== ZERO) {
      [num1, num2] = [num2, num1 % num2 as Integer];
    }

    return num1 !== ONE;
  }

  add(num1: Integer, num2: Integer) {
    return this.element(num1 + num2);
  }

  sub(num1, num2) {
    return this.element(num1 - num2);
  }

  inv(num) {
    const { mod, ZERO, ONE } = this;

    let [r, s, x1, x2, y1, y2] = [num, mod, ONE, ZERO, ZERO, ONE];

    while (s !== ZERO) {
      const q = r / s;

      [r, s, x1, x2, y1, y2] = [s, r - s * q, x2, x1 - x2 * q, y2, y1 - y2 * q];
    }

    if (r !== ONE) {
      throw new Error("Division by ZERO");
    }

    return this.element(x1);
  }

  mul(num1, num2) {
    return this.element(num1 * num2);
  }

  div(num1, num2) {
    return this.mul(num1, this.inv(num2));
  }

  *elements() {
    const { mod, ZERO, ONE } = this;

    for (let element = ZERO; element < mod; element += ONE) {
      yield element;
    }
  }
}
