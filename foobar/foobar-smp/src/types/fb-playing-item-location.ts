/**
 * The {@link FbPlayingItemLocation} interface describes a playing item
 * locations returned by {@link Plman.GetPlayingItemLocation}.
 *
 * @public
 */
export interface FbPlayingItemLocation {
  /**
   * The {@link FbPlayingItemLocation.IsValid} property checks
   * whether playlist item at the current location is valid.
   *
   * ```ts
   *  const playingItemLocation = plman.GetPlayingItemLocation();
   *
   *  if (playingItemLocation.IsValid) {
   *    console.log(playingItemLocation.PlaylistIndex);
   *    // >> 1
   *
   *    console.log(playingItemLocation.PlaylistItemIndex);
   *    // >> 2
   *  }
   * ```
   *
   * @returns `false` if foobar2000 isn't playing or if the playing track
   * has since been removed from the playlist it was on when playback was
   * started.
   */
  readonly IsValid: boolean;

  /**
   * The {@link FbPlayingItemLocation.PlaylistIndex} property contains a
   * playlist index.
   *
   * @returns `-1` if item is not in a playlist.
   */
  readonly PlaylistIndex: number;

  /**
   * The {@link FbPlayingItemLocation.PlaylistItemIndex} contains a playlist
   * item index.
   *
   * @returns `-1` if item is not in a playlist.
   */
  readonly PlaylistItemIndex: number;
}
