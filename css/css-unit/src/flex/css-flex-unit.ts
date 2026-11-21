import type { CssUnit } from "../unit/css-unit";

/**
 * The {@link CssFlexUnit} type represents the `<flex>` units.
 *
 * @remarks
 *   The `<flex>` is a dimension with the {@link CssUnit.fr} unit, which
 *   represents a fraction of the leftover space in the grid container.
 *
 * @public
 */
export type CssFlexUnit = CssUnit.fr;
