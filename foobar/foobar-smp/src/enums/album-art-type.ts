/**
 * The {@link AlbumArtType} enumeration represents album art types.
 *
 * @remarks
 * The {@link AlbumArtType} enumeration is used by:
 * {@link FbMetadbHandleList.AttachImage},
 * {@link FbMetadbHandleList.RemoveAttachedImage},
 * {@link FbUtils.GetAlbumArtAsync},
 * {@link FbUtils.GetAlbumArtAsyncV2},
 * {@link FbUtils.GetAlbumArtEmbedded},
 * {@link FbUtils.GetAlbumArtV2}.
 *
 * @public
 */
export enum AlbumArtType {
  /**
   * Front art.
   */
  Front = 0,

  /**
   * Back art.
   */
  Back = 1,

  /**
   * Disc art.
   */
  Disc = 2,

  /**
   * Icon art.
   */
  Icon = 3,

  /**
   * Artist art.
   */
  Artist = 4,
}
