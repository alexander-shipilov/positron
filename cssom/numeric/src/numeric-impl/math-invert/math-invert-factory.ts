import { CssMathOperator } from "@positron/css-numeric";

import { MathUnaryFactory } from "../math-unary";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathInvertClass } from "./math-invert-class";
import type { MathInvertImpl } from "./math-invert-impl";

const registry = new WeekMapRegistry<MathInvertImpl, MathInvertClass>();

/**
 *
 */
export function MathInvertFactory(impl: MathInvertImpl): MathInvertClass {
  return registry.get(impl, () => {
    class MathInvert extends MathUnaryFactory(impl) {
      public override get operator(): CssMathOperator {
        return CssMathOperator.invert;
      }
    }

    return MathInvert;
  });
}
