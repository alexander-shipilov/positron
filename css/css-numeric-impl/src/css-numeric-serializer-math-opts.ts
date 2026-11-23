/**
 * The {@link CssNumericSerializerMathOpts} interface defines serialization
 * options for `CssMathValue` expressions.
 *
 * @public
 */
export interface CssNumericSerializerMathOpts {
  /**
   * Whether the serialized expression is nested inside an outer math
   * expression.
   */
  nested?: boolean;

  /**
   * Whether outer parentheses or `calc(...)` wrapper should be omitted.
   */
  parenLess?: boolean;
}
