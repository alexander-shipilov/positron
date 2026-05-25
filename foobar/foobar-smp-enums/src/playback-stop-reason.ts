/**
 * The {@link PlaybackStopReason} enumeration represents the reasons that can
 * stop playback.
 *
 * @public
 */
export enum PlaybackStopReason {
  /**
   * User stops playback.
   */
  InvokedByUser = 0,

  /**
   * End of file reached.
   */
  EndOfFile = 1,

  /**
   * Starting another track.
   */
  StartingAnotherTrack = 2,

  /**
   * Fb2k is shutting down.
   */
  PlayerShutDown = 3,
}
