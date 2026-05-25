/**
 * The {@link TooltipDelayTime} enumeration represents the tooltip delays.
 *
 * @see http://msdn.microsoft.com/en-us/library/bb760404(VS.85).aspx
 *
 * @public
 */
export enum TooltipDelayTime {
  /**
   * Set all three delay times to default proportions. The autopop time will be
   * ten times the initial time and the reshow time will be one fifth the
   * initial time.
   */
  Automatic = 0,

  /**
   * Set the amount of time it takes for subsequent tooltip windows to appear
   * as the pointer moves from one tool to another.
   */
  Reshow = 1,

  /**
   * Set the amount of time a tooltip window remains visible if the pointer is
   * stationary within a tool's bounding rectangle.
   */
  Autopop = 2,

  /**
   * Set the amount of time a pointer must remain stationary within a tool's
   * bounding rectangle before the tooltip window appears.
   */
  Initial = 3,
}
