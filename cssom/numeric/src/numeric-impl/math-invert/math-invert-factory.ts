import { CssMathOperator } from "@positron/css-numeric";

import { MathUnaryFactory } from "../math-unary";
import { Registry } from "../registry";

import type { MathInvertClass } from "./math-invert-class";
import type { MathInvertImpl } from "./math-invert-impl";

const registry = new Registry<MathInvertImpl, MathInvertClass>();

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
