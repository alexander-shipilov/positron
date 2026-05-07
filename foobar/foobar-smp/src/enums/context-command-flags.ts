/**
 * The {@link ContextCommandFlags} enumeration specifies context command flags.
 *
 * @public
 */
export enum ContextCommandFlags {
  /**
   * Default (depends on whether SHIFT key is pressed,
   * {@link ContextCommandFlags.Reduced} or {@link ContextCommandFlags.Full} is
   * selected)
   */
  Default = 0,

  /**
   *
   */
  Reduced = 4,

  /**
   * This can be useful if you need to run context commands the user may have
   * hidden using `File` \> `Preferences` \> `Display` \> `Context Menu`
   */
  Full = 8,
}
