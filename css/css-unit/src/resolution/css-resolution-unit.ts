import type { CssUnit } from "../unit";

/**
 * The {@link CssResolutionUnit} type represents the units denoted by CSS
 * specification as `<resolution>`.
 *
 * @remarks
 *   The `<resolution>` unit represents the size of a single `"dot"` in a
 *   graphical representation by indicating how many of these dots fit in
 *   a `in`, `cm`, or `px`.
 *
 *   All `<resolution>` units are compatible, and {@link CssUnit.dppx} is
 *   their canonical unit.
 *
 * @public
 */
export type CssResolutionUnit =
  | CssUnit.dpcm //
  | CssUnit.dpi
  | CssUnit.dppx
  | CssUnit.x;
