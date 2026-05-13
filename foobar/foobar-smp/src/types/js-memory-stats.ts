/**
 * The {@link JsMemoryStats} interface represents return value of
 * {@link FbWindow.JsMemoryStats}.
 *
 * @public
 */
export interface JsMemoryStats {
  /**
   * The {@link JsMemoryStats.MemoryUsage} property represents a memory usage
   * of the current panel (in bytes).
   */
  MemoryUsage: number;

  /**
   * The {@link JsMemoryStats.TotalMemoryLimit} property represents maximum
   * allowed memory usage for the component (in bytes).
   *
   * @remarks
   * If the total memory usage exceeds this value, all panels will fail with
   *   OOM error.
   */
  TotalMemoryLimit: number;

  /**
   * The {@link JsMemoryStats.TotalMemoryUsage} property represents total
   * memory usage of all panels (in bytes)
   */
  TotalMemoryUsage: number;
}
