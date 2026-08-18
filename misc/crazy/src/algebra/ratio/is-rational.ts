import type { IntegralAlgebra } from "../integral-algebra";
import { isVector2 } from "../../utils";
import { isVector2Of } from "../../utils/vector2/is-vector2-of";

import type { Rational } from "./rational";

export function isRational<TValue>(
  integral: IntegralAlgebra<TValue>,
  maybeRational: unknown,
): maybeRational is Rational<TValue> {
  return (
    isVector2(maybeRational) &&
    isVector2Of(maybeRational, (value: unknown): value is TValue =>
      integral.isElement(value),
    )
  );
}
