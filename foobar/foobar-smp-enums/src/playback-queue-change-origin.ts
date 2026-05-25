/**
 * The {@link PlaybackQueueChangeOrigin} enumeration specifies the origins of
 * playback queue changes.
 *
 * @public
 */
export enum PlaybackQueueChangeOrigin {
  /**
   * User added track to the playback queue.
   */
  UserAdded = 1,

  /**
   * User removed track from the playback queue.
   */
  UserRemoved = 2,

  /**
   * Playback advance.
   * todo: ??
   */
  PlaybackAdvance = 3,
}
