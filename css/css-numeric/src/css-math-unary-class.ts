import type { CssMathUnary } from "./css-math-unary";
import type { CssNumberish } from "./css-numberish";

/**
 * The {@link CssMathUnaryClass} type represents an abstract constructor for
 * unary {@link CssMathUnary} subclasses.
 *
 * @public
 */
export type CssMathUnaryClass = abstract new (
  arg: CssNumberish,
) => CssMathUnary;
