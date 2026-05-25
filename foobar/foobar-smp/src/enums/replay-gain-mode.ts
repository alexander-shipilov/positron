/**
 * The {@link ReplayGainMode} enumeration represents replaygain modes.
 *
 * @remarks
 * The {@link ReplayGainMode} enumeration is used by:
 * {@link FbCallbacks.on_replaygain_mode_changed},
 * {@link Fb.ReplaygainMode}.
 *
 * @public
 */
export enum ReplayGainMode {
  /**
   * No replay gain.
   */
  None = 0,

  /**
   * Track.
   */
  Track = 1,

  /**
   * Album.
   */
  Album = 2,

  /**
   * Track / Album by Playback Order.
   */
  TrackAlbum = 3,
}
