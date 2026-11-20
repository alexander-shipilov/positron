import type { CssNumberish, CssNumericValue } from "@positron/css-numeric";
import { CssMathOperator } from "@positron/css-numeric";

import type { NumericValue } from "../numeric-value";
import { $lower, $upper, $value } from "../-internal";
import { MathValueFactory } from "../math-value";
import { Registry } from "../registry";

import type { MathClampClass } from "./math-clamp-class";
import type { MathClampImpl } from "./math-clamp-impl";

const registry = new Registry<MathClampImpl, MathClampClass>();

/**
 *
 */
export function MathClampFactory(impl: MathClampImpl): MathClampClass {
  return registry.get(impl, () => {
    class MathClamp extends MathValueFactory(impl) {
      public [$lower]!: NumericValue;

      public [$upper]!: NumericValue;

      public [$value]!: NumericValue;

      public get lower(): CssNumericValue {
        return this[$lower];
      }

      public get operator(): CssMathOperator {
        return CssMathOperator.clamp;
      }

      public get upper(): CssNumericValue {
        return this[$upper];
      }

      public get value(): CssNumericValue {
        return this[$value];
      }

      public constructor(
        lower: CssNumberish,
        value: CssNumberish,
        upper: CssNumberish,
      ) {
        super();

        impl.initMathClamp(this, lower, value, upper);
      }
    }

    return MathClamp;
  });
}
