import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssAbsoluteLengthUnit} type represents the absolute `<length>`
 * units, which are fixed in relation to each other and anchored to some
 * physical measurement.
 *
 * @remarks
 *   The absolute units consist of the physical units ({@link CssUnit.cm},
 *   {@link CssUnit.in}, {@link CssUnit.mm}, {@link CssUnit.pc},
 *   {@link CssUnit.pt}, {@link CssUnit.q}) and the visual angle unit (pixel
 *   unit) ({@link CssUnit.px}).
 *
 *   All of the {@link CssAbsoluteLengthUnit} units are compatible, and
 *   {@link CssUnit.px} is their canonical unit.
 *
 * @public
 */
export type CssAbsoluteLengthUnit =
  | CssUnit.cm //
  | CssUnit.in
  | CssUnit.mm
  | CssUnit.pc
  | CssUnit.pt
  | CssUnit.px
  | CssUnit.q;
