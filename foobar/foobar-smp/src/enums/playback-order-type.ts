/**
 * The {@link PlaybackOrderType} enumeration specifies playback orders.
 *
 * @remarks
 * The {@link PlaybackOrderType} enumeration is used by:
 * {@link FbPlaylistManager.PlaybackOrder},
 * {@link FbCallbacks.on_playback_order_changed}.
 *
 * @public
 */
export enum PlaybackOrderType {
  /**
   * Default
   */
  Default = 0,

  /**
   * Repeat playlist
   */
  RepeatPlaylist = 1,

  /**
   * Repeat track
   */
  RepeatTrack = 2,

  /**
   * Random playback
   */
  Random = 3,

  /**
   * Shuffle tracks
   */
  ShuffleTracks = 4,

  /**
   * Shuffle albums
   */
  ShuffleAlbums = 5,

  /**
   * Shuffle folders
   */
  ShuffleFolders = 6,
}
