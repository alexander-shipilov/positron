import type { CssNumberish, CssNumericArray } from "@positron/css-numeric";

import type { NumericValue } from "../numeric-value";
import { $values } from "../internal";
import { MathValueFactory } from "../math-value";
import { WeekMapRegistry } from "../registry/week-map-registry";

import type { MathVariadicClass } from "./math-variadic-class";
import type { MathVariadicImpl } from "./math-variadic-impl";

const registry = new WeekMapRegistry<MathVariadicImpl, MathVariadicClass>();

/**
 *
 */
export function MathVariadicFactory(impl: MathVariadicImpl): MathVariadicClass {
  return registry.get(impl, () => {
    class MathVariadic extends MathValueFactory(impl) {
      public [$values]!: [NumericValue, ...NumericValue[]];

      public get values(): CssNumericArray {
        return this[$values];
      }

      public constructor(...args: CssNumberish[]) {
        super();

        impl.initMathVariadic(this, ...args);
      }
    }

    return MathVariadic;
  });
}
