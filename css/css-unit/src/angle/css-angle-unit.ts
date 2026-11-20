import type { CssUnit } from "../unit";

/**
 * The {@link CssAngleUnit} type represents the `<angle>` units.
 *
 * @remarks
 *   The `<angle>` unit is typically interpreted as a bearing angle,
 *   where `0deg` is "up" or "north" on the screen, and larger angles are more
 *   clockwise (so `90deg` is "right" or "east").
 *
 *   All `<angle>` units are compatible, and {@link CssUnit.deg} is their
 *   canonical unit.
 *
 * @public
 */
export type CssAngleUnit =
  | CssUnit.deg //
  | CssUnit.grad
  | CssUnit.rad
  | CssUnit.turn;
