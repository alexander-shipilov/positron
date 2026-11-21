import type { CssNumberish } from "@positron/css-numeric";
import { CssMathOperator } from "@positron/css-numeric";

import { MathVariadicFactory } from "../math-variadic";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathMaxClass } from "./math-max-class";
import type { MathMaxImpl } from "./math-max-impl";

const registry = new WeekMapRegistry<MathMaxImpl, MathMaxClass>();

/**
 *
 */
export function MathMaxFactory(impl: MathMaxImpl): MathMaxClass {
  return registry.get(impl, () => {
    class MathMax extends MathVariadicFactory(impl) {
      public override get operator(): CssMathOperator {
        return CssMathOperator.max;
      }

      public constructor(...args: CssNumberish[]) {
        super(...args);

        impl.initMathMax(this);
      }
    }

    return MathMax;
  });
}
