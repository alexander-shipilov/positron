/**
 * The {@link PlaybackStopReason} enumeration specifies reasons that can stop
 * playback.
 *
 * @public
 */
export enum PlaybackStopReason {
  /**
   * User stops playback.
   */
  User = 0,

  /**
   * End of file reached.
   */
  Eof = 1,

  /**
   * Starting another track.
   */
  StartingAnother = 2,

  /**
   * Fb2k is shutting down.
   */
  Shutdown = 3,
}
