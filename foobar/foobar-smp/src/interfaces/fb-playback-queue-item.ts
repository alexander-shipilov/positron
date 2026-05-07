import type { FbMetadbHandle } from "./fb-metadb-handle";

/**
 * @public
 */
export interface FbPlaybackQueueItem {
  /**
   * The {@link FbPlaybackQueueItem.Handle} property contains meta DB handle.
   */
  readonly Handle: FbMetadbHandle;

  /**
   * The {@link FbPlaybackQueueItem.Handle} property contains an index of
   * playlist.
   *
   * @returns `-1` if item is not in a playlist.
   */
  readonly PlaylistIndex: number;

  /**
   * The {@link FbPlaybackQueueItem.Handle} property contains an index of
   * playlist item.
   *
   * @returns `-1` if item is not in a playlist.
   */
  readonly PlaylistItemIndex: number;
}
