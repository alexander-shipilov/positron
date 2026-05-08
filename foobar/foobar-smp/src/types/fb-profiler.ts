/**
 * The {@link FbProfiler} class creates a new profiler object.
 *
 * ```
 *  const test = new FbProfiler('test');
 *
 *  // do something time-consuming
 *
 *  console.log(test.Time);
 *  // Outputs bare time in ms like "789"
 *
 *  test.Print();
 *  // Outputs component name/version/assigned name like
 *  // "Spider Monkey Panel v1.0.0: profiler (test): 789 ms"
 * ```
 *
 * @public
 */
export declare class FbProfiler {
  /**
   * The {@link FbProfiler.Time} property contains time in milliseconds.
   */
  readonly Time: number;

  /**
   * @param name -
   */
  constructor(name: string);

  /**
   * ```ts
   *  const test = new FbProfiler('Group #1');
   *
   *  // Do smth #1
   *  test.Print('\nTask #1:', false);
   *
   *  // Do smth #2
   *  test.Print('\nTask #2:', false);
   *
   *  // Do smth
   *  test.Print();
   *
   *  // Output:
   *  // profiler (Group #1):
   *  // Task #1: 789 ms
   *  // profiler (Group #1):
   *  // Task #2: 1530 ms
   *  // Spider Monkey Panel v1.0.0: profiler (Group #1): 3541 ms
   * ```
   *
   * @param additionalMsg - String that will be prepended to the measured
   *   time. Default `""`.
   * @param printComponentInfo - Default `true`.
   */
  Print(additionalMsg?: string, printComponentInfo?: boolean): void;

  /**
   *
   */
  Reset(): void;
}
