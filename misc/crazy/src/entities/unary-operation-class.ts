import type { CrazyEntity } from "../crazy";

import type { UnaryOperation } from "./unary-operation";

export type UnaryOperationClass<
  TInstance extends UnaryOperation = UnaryOperation,
> = new (arg: CrazyEntity) => TInstance;
