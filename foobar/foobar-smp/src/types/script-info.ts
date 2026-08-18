/**
 * The {@link ScriptInfo} interface represents a return value of
 * {@link FbWindow.ScriptInfo}.
 *
 * @public
 */
export interface ScriptInfo {
  /**
   * The {@link ScriptInfo.Author} property contains script author.
   */
  readonly Author?: string;

  /**
   * The {@link ScriptInfo.Name} property contains script name.
   */
  readonly Name: string;

  /**
   * The {@link ScriptInfo.PackageId} property contains script package id.
   *
   * @remarks
   * Note: {@link ScriptInfo.PackageId} is only present when the panel script
   *   is a package.
   */
  readonly PackageId?: string;

  /**
   * The {@link ScriptInfo.Version} property contains script version.
   */
  readonly Version?: string;
}
