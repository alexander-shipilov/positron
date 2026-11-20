import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssTimeUnit} type represent the units denoted by CSS
 * specification as `<time>`.
 *
 * @remarks
 *   The `<time>` unit represents the duration.
 *
 *   All `<time>` units are compatible, and {@link CssUnit.s} is their
 *   canonical unit.
 *
 * @public
 */
export type CssTimeUnit =
  | CssUnit.ms //
  | CssUnit.s;
