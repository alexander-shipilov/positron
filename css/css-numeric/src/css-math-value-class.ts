import type { CssMathValue } from "./css-math-value";

/**
 * The {@link CssMathValueClass} type represents an abstract constructor for
 * {@link CssMathValue} subclasses.
 *
 * @typeParam TInstance - The instance type constructed by subclasses.
 *
 * @public
 */
export type CssMathValueClass<TInstance extends CssMathValue = CssMathValue> =
  abstract new () => TInstance;
