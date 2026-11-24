/**
 * The {@link CssNumericSerializerMathOpts} interface defines serialization
 * options for `CssMathValue` expressions.
 *
 * @public
 */
export interface CssNumericSerializerMathOpts {
  /**
   * The {@link CssNumericSerializerMathOpts.nested} property specifies
   * whether the serialized expression is nested inside an outer math
   * expression.
   */
  nested?: boolean;

  /**
   * The {@link CssNumericSerializerMathOpts.parenLess} property specifies
   * whether outer parentheses or `calc(...)` wrapper should be omitted.
   */
  parenLess?: boolean;
}
