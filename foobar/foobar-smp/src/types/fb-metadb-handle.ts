import type { FbFileInfo } from "./fb-file-info";

/**
 * @public
 */
export interface FbMetadbHandle {
  /**
   * The {@link FbMetadbHandle.FileSize} property represents an item file size.
   *
   * @returns `-1 `if size is unavailable.
   */
  readonly FileSize: number;

  /**
   * The {@link FbMetadbHandle.Length} property represents an item length.
   */
  readonly Length: number;

  /**
   * The {@link FbMetadbHandle.Length} property represents an item path.
   *
   * @example
   * ```ts
   *  const handle = fb.GetFocusItem();
   *
   *  console.log(handle.Path);
   *  // >> D:\SomeSong.flac
   * ```
   */
  readonly Path: string;

  /**
   * The {@link FbMetadbHandle.RawPath} property represents an item raw path.
   *
   * @example
   * ```ts
   *  const handle = fb.GetFocusItem();
   *
   *  console.log(handle.RawPath);
   *  // >> file://D:\SomeSong.flac
   * ```
   */
  readonly RawPath: string;

  /**
   * The {@link FbMetadbHandle.SubSong} property represents an item subsong
   * number.
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
   * @remarks
   * If you want to compare them physically, use the
   *   {@link FbMetadbHandle.RawPath} property.
   *
   * @example
   * ```ts
   *  handle.Compare(handle2);
   * ```
   *
   * @param handle -
   */
  Compare(handle: FbMetadbHandle): boolean;

  /**
   * The {@link FbMetadbHandle.GetFileInfo} method returns file info.
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
   * @param firstPlayed - Use `""` to clear.
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
