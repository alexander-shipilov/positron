import type { MathOperator } from "./math-operator";
import type { NumericType } from "./numeric-type";
import { MathMax } from "./math-max";
import { MathMin } from "./math-min";
import { NumericValue } from "./numeric-value";

export class MathValue extends NumericValue {
  protected operator: MathOperator;

  protected constructor(type: NumericType, operator: MathOperator) {
    super(type);

    this.operator = operator;
  }

  serialize(nested: boolean = false, parenLess: boolean = false): string {
    // To serialize a CSSMathValue this, with optional arguments nested, a
    // boolean (defaulting to false if unspecified), paren-less, a boolean
    // (defaulting to false if unspecified), perform the following steps.

    // 1. Let s initially be the empty string.
    let s = "";

    // 2. If this is a CSSMathMin or CSSMathMax:
    if (this instanceof MathMin || this instanceof MathMax) {
      // 1. Append "min(" or "max(" to s, as appropriate.
      s += this instanceof MathMin ? "min(" : "max(";

      // 2. For each arg in this’s values internal slot, serialize arg with
      // nested and paren-less both true, and append the result to s, appending
      // a ", " between successive values.
      s += this.values.map((arg) => arg.serialize(true, true)).join(", ");

      // 3. Append ")" to s and return s.
      s += ")";

      return s;
    }

    return s;
  }
}
