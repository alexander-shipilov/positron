import type { CssUnit } from "../unit";

/**
 * The {@link CssLocalFontRelativeUnit} type represents the local
 * font-relative lengths, that refer to the font metrics of the element on
 * which they are used.
 *
 * @public
 */
export type CssLocalFontRelativeUnit =
  | CssUnit.cap //
  | CssUnit.ch
  | CssUnit.em
  | CssUnit.ex
  | CssUnit.ic
  | CssUnit.lh;
