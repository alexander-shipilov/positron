import { CssMathOperator } from "@positron/css-numeric";

import { MathUnaryFactory } from "../math-unary";
import { Registry } from "../registry";

import type { MathNegateClass } from "./math-negate-class";
import type { MathNegateImpl } from "./math-negate-impl";

const registry = new Registry<MathNegateImpl, MathNegateClass>();

/**
 *
 */
export function MathNegateFactory(impl: MathNegateImpl): MathNegateClass {
  return registry.get(impl, () => {
    class MathNegate extends MathUnaryFactory(impl) {
      public override get operator(): CssMathOperator {
        return CssMathOperator.negate;
      }
    }

    return MathNegate;
  });
}
