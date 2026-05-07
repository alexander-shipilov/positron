import type { FbFileInfo } from "./fb-file-info";

/**
 * @public
 */
export interface FbMetadbHandle {
  /**
   * The {@link FbMetadbHandle.FileSize} property contains item file size.
   *
   * @returns `-1 `if size is unavailable.
   */
  readonly FileSize: number;

  /**
   * The {@link FbMetadbHandle.Length} property contains item length.
   */
  readonly Length: number;

  /**
   * The {@link FbMetadbHandle.Length} property contains item path.
   *
   * ```ts
   *  const handle = fb.GetFocusItem();
   *
   *  console.log(handle.Path);
   *  // >> D:\SomeSong.flac
   * ```
   */
  readonly Path: string;

  /**
   * ```ts
   *  const handle = fb.GetFocusItem();
   *
   *  console.log(handle.RawPath);
   *  // >> file://D:\SomeSong.flac
   * ```
   */
  readonly RawPath: string;

  /**
   *
   */
  readonly SubSong: number;

  /**
   *
   */
  ClearStats(): void;

  /**
   * The {@link FbMetadbHandle.Compare} method compares two
   * {@link FbMetadbHandle} instances, pointer only.
   *
   * If you want to compare them physically, use the
   * {@link FbMetadbHandle.RawPath} property.
   *
   * ```ts
   *  handle.Compare(handle2);
   * ```
   *
   * @param handle -
   */
  Compare(handle: FbMetadbHandle): boolean;

  /**
   * The {@link FbMetadbHandle.Compare} method returns file info.
   *
   * @returns `null` if file info is not available.
   */
  GetFileInfo(): FbFileInfo | null;

  /**
   *
   */
  RefreshStats(): void;

  /**
   *
   * @param firstPlayed - Use `""` to clear
   */
  SetFirstPlayed(firstPlayed: string): void;

  /**
   *
   * @param lastPlayed - Use `""` to clear
   */
  SetLastPlayed(lastPlayed: string): void;

  /**
   * @param loved -  Use `0` to clear
   */
  SetLoved(loved: number): void;

  /**
   * @param playCount - Use `0` to clear
   */
  SetPlayCount(playCount: number): void;

  /**
   *
   * @param rating - Use `0` to clear
   */
  SetRating(rating: number): void;
}
