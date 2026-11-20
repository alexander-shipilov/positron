import type { CssLocalFontRelativeUnit } from "./css-local-font-relative-unit";
import type { CssRootFontRelativeUnit } from "./css-root-font-relative-unit";

/**
 * The {@link CssFontRelativeUnit} type represents font-relative lengths
 * that refer to the font metrics either of the element on which they are used
 * (for the local font-relative lengths) or of the root element (for the root
 * font-relative lengths).
 *
 * @public
 */
export type CssFontRelativeUnit =
  | CssLocalFontRelativeUnit //
  | CssRootFontRelativeUnit;
