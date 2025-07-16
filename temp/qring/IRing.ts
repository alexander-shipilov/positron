import { BigInteger } from "./BigInteger";
import { IntegerLike } from "./IntegerLike";


abstract class IRing<Integer extends BigInteger> {
  abstract readonly ZERO: Integer;

  abstract readonly ONE: Integer;

  protected constructor() {
  }

  abstract element(value: IntegerLike): Integer

  add(num1: Integer, num2: Integer): Integer {
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
