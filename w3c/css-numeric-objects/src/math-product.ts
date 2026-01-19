import type { Numberish } from "./numberish";
import type { NumericValue } from "./numeric-value";
import { isNonEmptyArray } from "./is-non-empty-array";
import { MathOperator } from "./math-operator";
import { MathValue } from "./math-value";
import { NumericType } from "./numeric-type";
import { rectifyNumberish } from "./rectify-numberish";

function mul(first: NumericValue, ...tail: NumericValue[]): NumericType {
  return tail.reduce(
    (currType: NumericType, item: NumericValue): NumericType => {
      const nextType = NumericType.multiply(currType, item.type);

      // If type is failure, throw a TypeError.
      if (nextType == null) {
        throw new TypeError(
          "Failed to execute 'mul' on 'NumericValue': Incompatible types",
        );
      }

      return nextType;
    },
    first.type,
  );
}

export class MathProduct extends MathValue {
  readonly values: NumericValue[];

  // The MathProduct(...args) constructor is defined identically to the
  // above, except that in step 3 it multiplies the types instead of adding,
  // and in the last step it returns a MathProduct.
  constructor(...args: Numberish[]) {
    // 1. Replace each item of args with the result of
    // rectifying a numberish value for the item.
    const values = args.map((value) => rectifyNumberish(value));

    // 2. If args is empty, throw a SyntaxError.
    if (!isNonEmptyArray(values)) {
      throw new SyntaxError(
        "Failed to construct `MathProduct`: Arguments can't be empty",
      );
    }

    // 3. Let `type` be the result of multiplying the types of all the items of
    // args.
    // 4. Return a new `MathProduct` whose values internal slot is set to args.
    super(mul(...values), MathOperator.Product);
    this.values = values;
  }
}
