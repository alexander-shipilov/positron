import type { Numberish } from "./numberish";
import type { NumericValue } from "./numeric-value";
import { isNonEmptyArray } from "./is-non-empty-array";
import { MathOperator } from "./math-operator";
import { MathValue } from "./math-value";
import { NumericType } from "./numeric-type";
import { rectifyNumberish } from "./rectify-numberish";

/**
 * @internal
 */
function add(first: NumericValue, ...tail: NumericValue[]): NumericType {
  return tail.reduce(
    (currType: NumericType, item: NumericValue): NumericType => {
      const nextType = NumericType.add(currType, item.type);

      // If type is failure, throw a TypeError.
      if (nextType == null) {
        throw new TypeError(
          "Failed to execute 'add' on 'NumericValue': Incompatible types",
        );
      }

      return nextType;
    },
    first.type,
  );
}

export class MathSum extends MathValue {
  readonly values: NumericValue[];

  // The MathSum(...args) constructor must, when called, perform the
  // following steps:
  constructor(...args: Numberish[]) {
    // 1. Replace each item of args with the result of
    // rectifying a numberish value for the item.
    const values = args.map((value) => rectifyNumberish(value));

    // 2. If args is empty, throw a SyntaxError.
    if (!isNonEmptyArray(values)) {
      throw new SyntaxError(
        "Failed to construct `MathSum`: Arguments can't be empty",
      );
    }

    // 3. Let `type` be the result of adding the types of all the items of args.
    // 4. Return a new `MathSum` whose values internal slot is set to args.
    super(add(...values), MathOperator.Sum);

    this.values = values;
  }
}
