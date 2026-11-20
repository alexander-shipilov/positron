import type { CssMathValue } from "./css-math-value";

/**
 * The {@link CssMathValueClass} interface represents a class for creating
 * instances of {@link CssMathValue}.
 *
 * @public
 */
export type CssMathValueClass<TInstance extends CssMathValue = CssMathValue> =
  abstract new () => TInstance;
