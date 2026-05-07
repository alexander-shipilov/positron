import type { EntityType } from "../entity-type";

/**
 * @public
 */
export type Operation2Type =
  | EntityType.Add
  | EntityType.Div
  | EntityType.Mul
  | EntityType.Pow
  | EntityType.Sub;
