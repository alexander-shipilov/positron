import type { CrazyEntityType } from "../crazy";

export type BinaryOperationType =
  | CrazyEntityType.Addition
  | CrazyEntityType.Division
  | CrazyEntityType.Exponentiation
  | CrazyEntityType.Product
  | CrazyEntityType.Subtraction;
