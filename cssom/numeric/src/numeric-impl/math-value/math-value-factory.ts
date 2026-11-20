import type { CssMathOperator } from "@positron/css-numeric";

import { NumericValueFactory } from "../numeric-value";
import { Registry } from "../registry";

import type { MathValueClass } from "./math-value-class";
import type { MathValueImpl } from "./math-value-impl";

const registry = new Registry<MathValueImpl, MathValueClass>();

/**
 *
 */
export function MathValueFactory(impl: MathValueImpl): MathValueClass {
  return registry.get(impl, () => {
    abstract class MathValue extends NumericValueFactory(impl) {
      public abstract readonly operator: CssMathOperator;
    }

    return MathValue;
  });
}
