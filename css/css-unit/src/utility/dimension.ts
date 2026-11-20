import type { CssUnit } from "../unit";

/**
 * The {@link Dimension} type represents a dimension value - a number with a
 * unit attached to it.
 *
 * @remarks
 *   CSS uses dimensions to specify distances (`<length>`), durations
 *   (`<time>`), frequencies (`<frequency>`), resolutions (`<resolution>`), and
 *   other quantities.
 *
 * @public
 */
export type Dimension<TUnit extends CssUnit = CssUnit> = [
  value: number,
  unit: TUnit,
];
