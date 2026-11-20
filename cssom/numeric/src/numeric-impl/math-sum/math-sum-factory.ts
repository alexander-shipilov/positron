import type { CssNumberish } from "@positron/css-numeric";
import { CssMathOperator } from "@positron/css-numeric";

import { MathVariadicFactory } from "../math-variadic";
import { Registry } from "../registry";

import type { MathSumClass } from "./math-sum-class";
import type { MathSumImpl } from "./math-sum-impl";

const registry = new Registry<MathSumImpl, MathSumClass>();

/**
 *
 */
export function MathSumFactory(impl: MathSumImpl): MathSumClass {
  return registry.get(impl, () => {
    class MathSum extends MathVariadicFactory(impl) {
      public override get operator(): CssMathOperator {
        return CssMathOperator.sum;
      }

      public constructor(...args: CssNumberish[]) {
        super(...args);

        impl.initMathSum(this);
      }
    }

    return MathSum;
  });
}
