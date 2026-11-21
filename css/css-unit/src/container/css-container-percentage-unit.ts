import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssContainerPercentageUnit} type represents the container query
 * percentage units (`cq*`), which specify a length relative to the dimensions
 * of a query container.
 *
 * @public
 */
export type CssContainerPercentageUnit =
  | CssUnit.cqb //
  | CssUnit.cqh
  | CssUnit.cqi
  | CssUnit.cqmax
  | CssUnit.cqmin
  | CssUnit.cqw;
