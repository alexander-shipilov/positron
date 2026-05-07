/**
 * The {@link PlaybackQueueChangeOrigin} enumeration specifies commands that
 * can initiate playback.
 *
 * @public
 */
export enum PlaybackStartCommand {
  /**
   * Default.
   */
  Default = 0,

  /**
   * Play.
   */
  Play = 1,

  /**
   * Plays the next track from the current playlist according to the current
   * playback order
   */
  Next = 2,

  /**
   * Plays the previous track from the current playlist according to the
   * current playback order
   */
  Prev = 3,

  /**
   * settrack (internal fb2k value)
   */
  SetTrack = 4,

  /**
   * Plays a random track from the current playlist.
   */
  Rand = 5,

  /**
   * resume (internal fb2k value).
   */
  Resume = 6,
}
