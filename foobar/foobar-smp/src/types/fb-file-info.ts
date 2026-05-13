/**
 * @public
 */
export interface FbFileInfo {
  /**
   * The {@link FbFileInfo.InfoCount} property represents a count of info items.
   *
   * @example
   * ```ts
   *  const fileInfo = fb.GetFocusItem().GetFileInfo();
   *
   *  console.log(fileInfo.InfoCount);
   *  // >> 9
   * ```
   */
  readonly InfoCount: number;

  /**
   * The {@link FbFileInfo.MetaCount} property represents a count of meta items.
   *
   * @example
   * ```ts
   *  const fileInfo = fb.GetFocusItem().GetFileInfo();
   *
   *  console.log(fileInfo.MetaCount);
   *  // >> 11
   * ```
   */
  readonly MetaCount: number;

  /**
   * @param name -
   *
   * @returns `-1` on failure.
   */
  InfoFind(name: string): number;

  /**
   * @param index -
   */
  InfoName(index: number): string;

  /**
   * @param index -
   */
  InfoValue(index: number): string;

  /**
   * @param name -
   *
   * @returns -1 on failure.
   */
  MetaFind(name: string): number;

  /**
   *
   * @remarks
   * Note: the case of the tag name returned can be different depending on tag
   * type, so using `toLowerCase()` or `toUpperCase()` on the result is
   * recommended.
   *
   * @example
   * ```ts
   *  const fileInfo = fb.GetFocusItem().GetFileInfo();
   *
   *  for (let i = 0; i < fileInfo.MetaCount; i++) {
   *    console.log(fileInfo.MetaName(i).toUpperCase());
   *  }
   * ```
   */
  MetaName(index: number): string;

  /**
   * The {@link FbFileInfo.MetaValue} method extracts value at the specified
   * `valueIndex` from the meta at `index`.
   *
   * @param index -
   * @param valueIndex - Used for iterating through multi-value tags.
   */
  MetaValue(index: number, valueIndex: number): string;

  /**
   * The {@link FbFileInfo.MetaValueCount} method returns the number of values
   * contained in a meta tag.
   *
   * @param index -
   */
  MetaValueCount(index: number): number;
}
