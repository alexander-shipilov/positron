/**
 * The {@link PlaybackOrder} enumeration represents the playback orders.
 *
 * @public
 */
export enum PlaybackOrder {
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
