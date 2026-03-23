import type { EntityType } from "../entity";

/**
 * @public
 */
export type BinaryOperationType =
  | EntityType.Add
  | EntityType.Div
  | EntityType.Pow
  | EntityType.Mul
  | EntityType.Sub;
