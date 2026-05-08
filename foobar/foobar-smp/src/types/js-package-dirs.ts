/**
 * Note: returned directories are not guaranteed to exist.
 *
 * @public
 */
export interface JsPackageDirs {
  /**
   * The {@link JsPackageDirs.Assets} property represents a path to the
   * directory inside package folder that contains assets.
   */
  readonly Assets: string;

  /**
   * The {@link JsPackageDirs.Root} property represents a path to the root
   * directory of the package.
   */
  readonly Root: string;

  /**
   * The {@link JsPackageDirs.Scripts} property represents a path to the
   * directory inside package folder that contains scripts.
   */
  readonly Scripts: string;

  /**
   * The {@link JsPackageDirs.Storage} property represents a path to the
   * persistent and unique directory inside foobar2000 profile folder that can
   * be used to store runtime data (e.g. cache).
   */
  readonly Storage: string;
}
