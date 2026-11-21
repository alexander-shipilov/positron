import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link Dimension} type represents a dimension value — a number with a
 * unit attached to it.
 *
 * @remarks
 *   CSS uses dimensions to specify distances (`<length>`), durations
 *   (`<time>`), frequencies (`<frequency>`), resolutions (`<resolution>`), and
 *   other quantities.
 *
 * @typeParam TUnit - The CSS unit identifier type.
 *
 * @public
 */
export type Dimension<TUnit extends CssUnit = CssUnit> = [
  value: number,
  unit: TUnit,
];
