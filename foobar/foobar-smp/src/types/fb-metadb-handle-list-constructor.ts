import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * The {@link FbMetadbHandleListConstructor} interface represents the
 * {@link FbMetadbHandleList} constructor.
 *
 * @public
 */
export interface FbMetadbHandleListConstructor {
  /**
   * @param arg -
   */
  new (
    arg?: FbMetadbHandle | FbMetadbHandle[] | FbMetadbHandleList | null,
  ): FbMetadbHandleList;
}
