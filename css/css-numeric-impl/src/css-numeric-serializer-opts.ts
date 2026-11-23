import type { CssNumericSerializerMathOpts } from "./css-numeric-serializer-math-opts";
import type { CssNumericSerializerUnitOpts } from "./css-numeric-serializer-unit-opts";

/**
 * The {@link CssNumericSerializerOpts} interface combines serialization
 * options for both `CssUnitValue` and `CssMathValue` instances.
 *
 * @public
 */
export interface CssNumericSerializerOpts
  extends CssNumericSerializerMathOpts, CssNumericSerializerUnitOpts {}
