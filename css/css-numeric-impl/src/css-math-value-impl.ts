import type { CssMathOperator, CssMathValue } from "@positron/css-numeric";

/**
 * The {@link CssMathValueImpl} interface defines internal operations for
 * inspecting `CssMathValue` instances.
 *
 * @public
 */
export interface CssMathValueImpl {
  /**
   * The {@link CssMathValueImpl.getMathValueOperator} method returns the
   * operator associated with the given `$this` math expression.
   *
   * @param $this - The `CssMathValue` instance to inspect.
   *
   * @returns The corresponding `CssMathOperator` member.
   */
  getMathValueOperator($this: CssMathValue): CssMathOperator;
}
