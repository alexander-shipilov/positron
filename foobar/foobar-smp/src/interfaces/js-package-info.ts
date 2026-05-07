import type { JsPackageDirs } from "./js-package-dirs";

/**
 * The {@link JsPackageInfo} interface represents a return value of
 * {@link Utils.GetPackageInfo}.
 *
 * @public
 */
export interface JsPackageInfo {
  /**
   * The {@link JsPackageInfo.Directories} property represents package
   * directories.
   */
  readonly Directories: JsPackageDirs;

  /**
   * The {@link JsPackageInfo.Version} property represents a package version.
   */
  readonly Version: string;
}
