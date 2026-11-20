import type { CssNumberish } from "@positron/css-numeric";

import type { MathUnary } from "./math-unary";

export type MathUnaryClass = abstract new (arg: CssNumberish) => MathUnary;
