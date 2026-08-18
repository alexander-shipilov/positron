/**
 * The {@link FileAttribute} enum represents file attributes which are
 * metadata values stored by the file system on disk.
 *
 * @remarks
 * The {@link FileAttribute} enum is used by:
 * {@link FbUtils.Glob}.
 *
 * @see http://msdn.microsoft.com/en-us/library/ee332330%28VS.85%29.aspx
 *
 * @public
 */
export enum FileAttribute {
  /**
   * A file that is read-only. Applications can read the file, but cannot write
   * to it or delete it. This attribute is not honored on directories.
   */
  Readonly = 0x00000001,

  /**
   * The file or directory is hidden. It is not included in an ordinary
   * directory listing.
   */
  Hidden = 0x00000002,

  /**
   * A file or directory that the operating system uses a part of, or uses
   * exclusively.
   */
  System = 0x00000004,

  /**
   * The handle that identifies a directory.
   */
  Directory = 0x00000010,

  /**
   * A file or directory that is an archive file or directory.
   * Applications typically use this attribute to mark files for backup or
   * removal.
   */
  Archive = 0x00000020,

  /**
   * A file that does not have other attributes set.
   * This attribute is valid only when used alone.
   */
  Normal = 0x00000080,

  /**
   * A file that is being used for temporary storage.
   * File systems avoid writing data back to mass storage if sufficient cache
   * memory is available, because typically, an application deletes a temporary
   * file after the handle is closed. In that scenario, the system can entirely
   * avoid writing the data. Otherwise, the data is written after the handle is
   * closed.
   */
  Temporary = 0x00000100,

  /**
   * A file that is a sparse file.
   */
  SparseFile = 0x00000200,

  /**
   * A file or directory that has an associated reparse point, or a file that
   * is a symbolic link.
   */
  ReparsePoint = 0x00000400,

  /**
   * A file or directory that is compressed.
   * For a file, all the data in the file is compressed. For a directory,
   * compression is the default for newly created files and subdirectories.
   */
  Compressed = 0x00000800,

  /**
   * The data of a file is not available immediately.
   * This attribute indicates that the file data is physically moved to offline
   * storage. This attribute is used by Remote Storage, which is the
   * hierarchical storage management software. Applications should not
   * arbitrarily change this attribute.
   */
  Offline = 0x00001000,

  /**
   * The file or directory is not to be indexed by the content indexing service.
   */
  NotContentIndexed = 0x00002000,

  /**
   * A file or directory that is encrypted.
   * For a file, all data streams in the file are encrypted. For a directory,
   * encryption is the default for newly created files and subdirectories.
   */
  Encrypted = 0x00004000,

  /**
   * All files
   */
  All = 0xffffffff,
}
