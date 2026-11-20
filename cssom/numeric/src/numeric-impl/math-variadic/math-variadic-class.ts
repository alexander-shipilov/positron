import type { CssNumberish } from "@positron/css-numeric";

import type { MathVariadic } from "./math-variadic";

export type MathVariadicClass = abstract new (
  ...args: CssNumberish[]
) => MathVariadic;
