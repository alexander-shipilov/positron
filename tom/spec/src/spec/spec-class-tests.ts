import type { SpecClass } from "./spec-class";
import type { SpecClassNewTests } from "./spec-class-new-tests";
import type { SpecFunction } from "./spec-function";
import type { SpecFunctionTests } from "./spec-function-tests";
import type { SpecInterfaceTests } from "./spec-interface-tests";

export type SpecClassTests<
  TTarget extends SpecClass,
  TArgs extends unknown[] = [],
> = SpecClassNewTests<TArgs> &
  (TTarget extends SpecFunction
    ? SpecFunctionTests<TTarget, TArgs>
    : SpecInterfaceTests<TTarget, TArgs>);
