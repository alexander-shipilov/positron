import type { MathClampImpl } from "./math-clamp";
import type { MathInvertImpl } from "./math-invert";
import type { MathMaxImpl } from "./math-max";
import type { MathMinImpl } from "./math-min";
import type { MathNegateImpl } from "./math-negate";
import type { MathProductImpl } from "./math-product";
import type { MathSumImpl } from "./math-sum";
import type { MathUnaryImpl } from "./math-unary";
import type { MathValueImpl } from "./math-value";
import type { MathVariadicImpl } from "./math-variadic";
import type { NumericValueImpl } from "./numeric-value";
import type { UnitValueImpl } from "./unit-value";

export interface NumericImpl
  extends
    MathClampImpl,
    MathInvertImpl,
    MathMaxImpl,
    MathMinImpl,
    MathNegateImpl,
    MathProductImpl,
    MathSumImpl,
    MathUnaryImpl,
    MathValueImpl,
    MathVariadicImpl,
    NumericValueImpl,
    UnitValueImpl {}
