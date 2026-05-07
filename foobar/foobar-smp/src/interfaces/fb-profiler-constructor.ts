import type { FbProfiler } from "./fb-profiler";

/**
 * @public
 */
export interface FbProfilerConstructor {
  /**
   * @param name -
   */
  new (name: string): FbProfiler;

  /**
   *
   */
  readonly prototype: FbProfiler;
}
