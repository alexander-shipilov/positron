import type { SpecFunction } from "./spec-function";
import type { SpecFunctionCallTests } from "./spec-function-call-tests";
import type { SpecInterfaceTests } from "./spec-interface-tests";

export type SpecFunctionTests<
  TTarget extends SpecFunction,
  TArgs extends unknown[] = [],
> = SpecFunctionCallTests<TArgs> & SpecInterfaceTests<TTarget, TArgs>;
