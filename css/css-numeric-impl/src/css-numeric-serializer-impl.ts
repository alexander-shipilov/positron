import type {
  CssMathValue,
  CssNumericValue,
  CssUnitValue,
} from "@positron/css-numeric";

import type { CssNumericSerializerMathOpts } from "./css-numeric-serializer-math-opts";
import type { CssNumericSerializerOpts } from "./css-numeric-serializer-opts";
import type { CssNumericSerializerUnitOpts } from "./css-numeric-serializer-unit-opts";

/**
 * The {@link CssNumericSerializerImpl} interface defines internal algorithms
 * for serializing `CssNumericValue` objects into CSS strings.
 *
 * @public
 */
export interface CssNumericSerializerImpl {
  /**
   * The {@link CssNumericSerializerImpl.serializeMathValue} method serializes
   * a `CssMathValue` expression into a CSS string.
   *
   * @param $this - The `CssMathValue` to serialize.
   *
   * @param opts - Optional math serialization flags.
   *
   * @returns The serialized CSS math expression.
   */
  serializeMathValue(
    $this: CssMathValue,
    opts?: CssNumericSerializerMathOpts,
  ): string;

  /**
   * The {@link CssNumericSerializerImpl.serializeNumericValue} method
   * serializes any `CssNumericValue` instance into a CSS string.
   *
   * @param $this - The `CssNumericValue` to serialize.
   *
   * @param opts - Optional serialization settings.
   *
   * @returns The serialized CSS numeric string.
   */
  serializeNumericValue(
    $this: CssNumericValue,
    opts?: CssNumericSerializerOpts,
  ): string;

  /**
   * The {@link CssNumericSerializerImpl.serializeUnitValue} method serializes
   * a `CssUnitValue` instance into a CSS string.
   *
   * @param $this - The `CssUnitValue` to serialize.
   *
   * @param opts - Optional range-clamping bounds.
   *
   * @returns The serialized CSS unit value string.
   */
  serializeUnitValue(
    $this: CssUnitValue,
    opts?: CssNumericSerializerUnitOpts,
  ): string;
}
