import type { FbProfiler } from "./fb-profiler";

/**
 * The {@link FbProfilerConstructor} interface represents a type of the global
 * `FbProfiler` constructor.
 *
 * @public
 */
export interface FbProfilerConstructor {
  /**
   * @param name -
   */
  new (name: string): FbProfiler;
}
