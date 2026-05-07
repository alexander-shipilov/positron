import type { FbMetadbHandle } from "./fb-metadb-handle";
import type { FbMetadbHandleList } from "./fb-metadb-handle-list";

/**
 * @public
 */
export interface FbMetadbHandleListConstructor {
  /**
   * @param arg -
   */
  new (
    arg?: FbMetadbHandle | FbMetadbHandle[] | FbMetadbHandleList | null,
  ): FbMetadbHandle;

  /**
   *
   */
  readonly prototype: FbMetadbHandleList;
}
