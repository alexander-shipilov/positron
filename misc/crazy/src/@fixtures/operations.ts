import type { NumberLike } from "@positron/core";
import { isNumberLike } from "@positron/core";

import type { CrazyEntity } from "../crazy";
import {
  Addition,
  Division,
  Exponentiation,
  Negation,
  Operand,
  Product,
  Subtraction,
} from "../entities";

function operation(arg: CrazyEntity | NumberLike): CrazyEntity {
  return isNumberLike(arg) ? operand(arg) : arg;
}

export function add(
  arg1: CrazyEntity | NumberLike,
  arg2: CrazyEntity | NumberLike,
): Addition {
  return new Addition(operation(arg1), operation(arg2));
}

export function div(
  arg1: CrazyEntity | NumberLike,
  arg2: CrazyEntity | NumberLike,
): Division {
  return new Division(operation(arg1), operation(arg2));
}

export function exp(
  arg1: CrazyEntity | NumberLike,
  arg2: CrazyEntity | NumberLike,
): Exponentiation {
  return new Exponentiation(operation(arg1), operation(arg2));
}

export function mul(
  arg1: CrazyEntity | NumberLike,
  arg2: CrazyEntity | NumberLike,
): Product {
  return new Product(operation(arg1), operation(arg2));
}

export function neg(arg: CrazyEntity | NumberLike): Negation {
  return new Negation(operation(arg));
}

export function operand(value: NumberLike): Operand {
  return new Operand(value);
}

export function sub(
  arg1: CrazyEntity | NumberLike,
  arg2: CrazyEntity | NumberLike,
): Subtraction {
  return new Subtraction(operation(arg1), operation(arg2));
}
