import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * The {@link FbPlaylistRecycler} interface represents a Recycle Bin for
 * playlists.
 *
 * @public
 */
export interface FbPlaylistRecycler {
  /**
   *
   */
  readonly Count: number;

  /**
   * @param index -
   */
  GetContent(index: number): FbMetadbHandleList;

  /**
   * @param index -
   */
  GetName(index: number): string;

  /**
   * @param affectedItems - An array like [1, 3, 5]
   */
  Purge(affectedItems: number[]): void;

  /**
   * @param index -
   */
  Restore(index: number): void;
}
