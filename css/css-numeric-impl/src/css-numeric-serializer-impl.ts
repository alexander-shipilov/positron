import type {
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { CssNumericSerializerMathOpts } from "./css-numeric-serializer-math-opts";
import type { CssNumericSerializerOpts } from "./css-numeric-serializer-opts";
import type { CssNumericSerializerUnitOpts } from "./css-numeric-serializer-unit-opts";

/**
 * @public
 */
export interface CssNumericSerializerImpl {
  serializeMathValue(
    $this: CssMathValue,
    opts?: CssNumericSerializerMathOpts,
  ): string;

  serializeNumericValue(
    $this: CssNumericValue,
    opts?: CssNumericSerializerOpts,
  ): string;

  serializeUnitValue(
    $this: CssUnitValue,
    opts?: CssNumericSerializerUnitOpts,
  ): string;
}
