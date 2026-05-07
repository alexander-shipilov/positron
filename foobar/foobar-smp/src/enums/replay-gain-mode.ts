/**
 * The {@link ReplayGainMode} enumeration represents replaygain modes.
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
