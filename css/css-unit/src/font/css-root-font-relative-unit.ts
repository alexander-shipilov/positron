import type { CssUnit } from "../unit";

/**
 * The {@link CssRootFontRelativeUnit} type represents the root
 * font-relative lengths, that refer to the font metrics of the root element.
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
