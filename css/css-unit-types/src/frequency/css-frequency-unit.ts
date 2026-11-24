import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssFrequencyUnit} type represents the `<frequency>` units.
 *
 * @remarks
 *   The `<frequency>` unit represents the number of occurrences per time
 *   interval.
 *
 *   All `<frequency>` units are compatible, and {@link CssUnit.hz} is their
 *   canonical unit.
 *
 * @public
 */
export type CssFrequencyUnit =
  | CssUnit.hz //
  | CssUnit.khz;
