import type { CssMathValue } from "./css-math-value";

/**
 * The {@link CssMathValueClass} type represents an abstract constructor for
 * {@link CssMathValue} subclasses.
 *
 * @public
 */
export type CssMathValueClass = abstract new () => CssMathValue;
