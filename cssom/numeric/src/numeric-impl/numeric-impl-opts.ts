import type { MathClampClass } from "./math-clamp";
import type { MathInvertClass } from "./math-invert";
import type { MathMaxClass } from "./math-max";
import type { MathMinClass } from "./math-min";
import type { MathNegateClass } from "./math-negate";
import type { MathProductClass } from "./math-product";
import type { MathSumClass } from "./math-sum";
import type { MathUnaryClass } from "./math-unary";
import type { MathValueClass } from "./math-value";
import type { MathVariadicClass } from "./math-variadic";
import type { NumericImpl } from "./numeric-impl";
import type { NumericValueClass } from "./numeric-value";
import type { SerializerImplClass } from "./serializer";
import type { TypeImplClass } from "./type";
import type { UnitValueClass } from "./unit-value";

export interface NumericImplOpts {
  Serializer: SerializerImplClass;

  Type: TypeImplClass;

  MathClamp(impl: NumericImpl): MathClampClass;

  MathInvert(impl: NumericImpl): MathInvertClass;

  MathMax(impl: NumericImpl): MathMaxClass;

  MathMin(impl: NumericImpl): MathMinClass;

  MathNegate(impl: NumericImpl): MathNegateClass;

  MathProduct(impl: NumericImpl): MathProductClass;

  MathSum(impl: NumericImpl): MathSumClass;

  MathUnary(impl: NumericImpl): MathUnaryClass;

  MathValue(impl: NumericImpl): MathValueClass;

  MathVariadic(impl: NumericImpl): MathVariadicClass;

  NumericValue(impl: NumericImpl): NumericValueClass;

  UnitValue(impl: NumericImpl): UnitValueClass;
}
