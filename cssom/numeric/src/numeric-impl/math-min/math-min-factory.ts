import type { CssNumberish } from "@positron/css-numeric";
import { CssMathOperator } from "@positron/css-numeric";

import { MathVariadicFactory } from "../math-variadic";
import { Registry } from "../registry";

import type { MathMinClass } from "./math-min-class";
import type { MathMinImpl } from "./math-min-impl";

const registry = new Registry<MathMinImpl, MathMinClass>();

/**
 *
 */
export function MathMinFactory(impl: MathMinImpl): MathMinClass {
  return registry.get(impl, () => {
    class MathMin extends MathVariadicFactory(impl) {
      public override get operator(): CssMathOperator {
        return CssMathOperator.min;
      }

      public constructor(...args: CssNumberish[]) {
        super(...args);

        impl.initMathMin(this);
      }
    }

    return MathMin;
  });
}
