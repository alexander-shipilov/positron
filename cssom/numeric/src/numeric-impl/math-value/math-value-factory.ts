import type { CssMathOperator, CssMathValueClass } from "@positron/css-numeric";

import { NumericValueFactory } from "../numeric-value";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathValueImpl } from "./math-value-impl";

const registry = new WeekMapRegistry<MathValueImpl, CssMathValueClass>();

/**
 *
 */
export function MathValueFactory(impl: MathValueImpl): CssMathValueClass {
  return registry.get(impl, () => {
    abstract class MathValue extends NumericValueFactory(impl) {
      public abstract readonly operator: CssMathOperator;
    }

    return MathValue;
  });
}
