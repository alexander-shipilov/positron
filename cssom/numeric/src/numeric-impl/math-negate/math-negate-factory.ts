import { CssMathOperator } from "@positron/css-numeric";

import { MathUnaryFactory } from "../math-unary";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathNegateClass } from "./math-negate-class";
import type { MathNegateImpl } from "./math-negate-impl";

const registry = new WeekMapRegistry<MathNegateImpl, MathNegateClass>();

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
