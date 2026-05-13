import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * The {@link FbPlaylistRecycler} interface represents a Recycle Bin for
 * playlists.
 *
 * @remarks
 * To get {@link FbPlaylistRecycler} instance use
 *    {@link FbPlaylistManager.PlaylistRecycler}.
 *
 * @public
 */
export interface FbPlaylistRecycler {
  /**
   * The {@link FbPlaylistRecycler.Count} property represents a count stored
   * of items.
   */
  readonly Count: number;

  /**
   * The {@link FbPlaylistRecycler.GetContent} method returns stored items.
   *
   * @param index -
   */
  GetContent(index: number): FbMetadbHandleList;

  /**
   * The {@link FbPlaylistRecycler.GetName} method returns the name of the
   * stored item.
   *
   * @param index -
   */
  GetName(index: number): string;

  /**
   * @param affectedItems - An array like `[1, 3, 5]`
   */
  Purge(affectedItems: number[]): void;

  /**
   * @param index -
   */
  Restore(index: number): void;
}
