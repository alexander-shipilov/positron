import type { CssNumberish } from "@positron/css-numeric";
import { CssMathOperator } from "@positron/css-numeric";

import { MathVariadicFactory } from "../math-variadic";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathProductClass } from "./math-product-class";
import type { MathProductImpl } from "./math-product-impl";

const registry = new WeekMapRegistry<MathProductImpl, MathProductClass>();

/**
 *
 */
export function MathProductFactory(impl: MathProductImpl): MathProductClass {
  return registry.get(impl, () => {
    class MathProduct extends MathVariadicFactory(impl) {
      public override get operator(): CssMathOperator {
        return CssMathOperator.product;
      }

      public constructor(...args: CssNumberish[]) {
        super(...args);

        impl.initMathProduct(this);
      }
    }

    return MathProduct;
  });
}
