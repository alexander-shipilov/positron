import type { CssMathVariadic } from "./css-math-variadic";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathVariadicClass} type represents an abstract constructor for
 * variadic {@link CssMathVariadic} subclasses.
 *
 * @public
 */
export type CssMathVariadicClass = abstract new (
  ...args: CssNumberish[]
) => CssMathVariadic;
