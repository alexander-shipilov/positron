import type { CssNumberish, CssNumericValue } from "@positron/css-numeric";

import type { NumericValue } from "../numeric-value";
import { $value } from "../internal";
import { MathValueFactory } from "../math-value";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathUnaryClass } from "./math-unary-class";
import type { MathUnaryImpl } from "./math-unary-impl";

const registry = new WeekMapRegistry<MathUnaryImpl, MathUnaryClass>();

/**
 *
 */
export function MathUnaryFactory(impl: MathUnaryImpl): MathUnaryClass {
  return registry.get(impl, () => {
    class MathUnary extends MathValueFactory(impl) {
      public [$value]!: NumericValue;

      public get value(): CssNumericValue {
        return this[$value];
      }

      public constructor(arg: CssNumberish) {
        super();

        impl.initMathUnary(this, arg);
      }
    }

    return MathUnary;
  });
}
