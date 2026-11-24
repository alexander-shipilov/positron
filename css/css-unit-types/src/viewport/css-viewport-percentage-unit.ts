import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssViewportPercentageUnit} type represents the
 * viewport-percentage units, which are relative to the size of the initial
 * containing block.
 *
 * @remarks
 *   There are four variants of the viewport-percentage length units,
 *   corresponding to three (possibly identical) notions of the viewport size.
 *
 *   ##### Default viewport-percentage units
 *
 *   The default viewport-percentage units (`v*`) are defined with respect to
 *   the large viewport size: the viewport sized assuming any UA interfaces
 *   that are dynamically expanded and retracted to be retracted.
 *
 *   The sizes of the default viewport-percentage units are fixed (and
 *   therefore stable) unless the viewport itself is resized.
 *
 *   ##### Large viewport-percentage units
 *
 *   The large viewport-percentage units (`lv*`) are defined with respect to
 *   the large viewport size: the viewport sized assuming any UA interfaces
 *   that are dynamically expanded and retracted to be retracted.
 *
 *   The sizes of the large viewport-percentage units are fixed (and therefore
 *   stable) unless the viewport itself is resized.
 *
 *   ##### Small viewport-percentage units
 *
 *   The small viewport-percentage units (`sv*`) are defined with respect to
 *   the small viewport size: the viewport sized assuming any UA interfaces
 *   that are dynamically expanded and retracted to be expanded.
 *
 *   The sizes of the small viewport-percentage units are fixed (and therefore
 *   stable) unless the viewport itself is resized.
 *
 *   ##### Dynamic viewport-percentage units
 *
 *   The dynamic viewport-percentage units (`dv*`) are defined with respect to
 *   the dynamic viewport size: the viewport sized with dynamic consideration
 *   of any UA interfaces that are dynamically expanded and retracted.
 *
 *   The sizes of the dynamic viewport-percentage units are not stable even
 *   while the viewport itself is unchanged. Using these units can cause
 *   content to resize e.g. while the user scrolls the page. Depending on
 *   usage, this can be disturbing to the user and/or costly in terms of
 *   performance.
 *
 * @public
 */
export type CssViewportPercentageUnit =
  | CssUnit.dvb
  | CssUnit.dvh
  | CssUnit.dvi
  | CssUnit.dvmax
  | CssUnit.dvmin
  | CssUnit.dvw
  | CssUnit.lvb
  | CssUnit.lvh
  | CssUnit.lvi
  | CssUnit.lvmax
  | CssUnit.lvmin
  | CssUnit.lvw
  | CssUnit.svb
  | CssUnit.svh
  | CssUnit.svi
  | CssUnit.svmax
  | CssUnit.svmin
  | CssUnit.svw
  | CssUnit.vb
  | CssUnit.vh
  | CssUnit.vi
  | CssUnit.vmax
  | CssUnit.vmin
  | CssUnit.vw;
