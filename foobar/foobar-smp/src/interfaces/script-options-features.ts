/**
 * The {@link ScriptOptionsFeatures} interface describes additional script
 * features.
 *
 * @public
 */
export interface ScriptOptionsFeatures {
  /**
   * The {@link ScriptOptionsFeatures.drag_n_drop} property indicates if drag
   * and drop functionality should be enabled.
   */
  drag_n_drop?: boolean;

  /**
   * The {@link ScriptOptionsFeatures.grab_focus} property indicates if panel
   * should grab mouse focus.
   */
  grab_focus?: boolean;
}
