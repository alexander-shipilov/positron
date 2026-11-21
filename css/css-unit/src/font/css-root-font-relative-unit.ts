import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssRootFontRelativeUnit} type represents the root font-relative
 * lengths, which refer to the font metrics of the root element.
 *
 * @public
 */
export type CssRootFontRelativeUnit =
  | CssUnit.rcap //
  | CssUnit.rch
  | CssUnit.rem
  | CssUnit.rex
  | CssUnit.ric
  | CssUnit.rlh;
