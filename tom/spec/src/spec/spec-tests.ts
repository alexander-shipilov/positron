import type { SpecClass } from "./spec-class";
import type { SpecClassTests } from "./spec-class-tests";
import type { SpecFunction } from "./spec-function";
import type { SpecFunctionTests } from "./spec-function-tests";
import type { SpecInterfaceTests } from "./spec-interface-tests";

/**
 * The {@link SpecTests} type describes an object to test the specified
 * `TTarget`
 *
 * @public
 */
export type SpecTests<
  TTarget,
  TArgs extends unknown[] = [],
> = TTarget extends SpecClass
  ? SpecClassTests<TTarget, TArgs>
  : TTarget extends SpecFunction
    ? SpecFunctionTests<TTarget, TArgs>
    : TTarget extends object
      ? SpecInterfaceTests<TTarget, TArgs>
      : never;
