/**
 * The {@link ContextCommandFlags} enumeration represents context command flags.
 *
 * @remarks
 * The {@link ContextCommandFlags} enumeration is used by:
 * {@link Fb.RunContextCommand},
 * {@link Fb.RunContextCommandWithMetadb}.
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
   * hidden using `File > Preferences > Display > Context Menu`
   */
  Full = 8,
}
