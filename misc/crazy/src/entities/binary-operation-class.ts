import type { CrazyEntity } from "../crazy";

import type { BinaryOperation } from "./binary-operation";

export type BinaryOperationClass<
  TInstance extends BinaryOperation = BinaryOperation,
> = new (arg1: CrazyEntity, arg2: CrazyEntity) => TInstance;
