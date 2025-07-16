import type { TreeSetImpl } from "../set/TreeSetImpl";

export interface TreeStoreItem<Node> {
  /**
   * Children
   */
  children: TreeSetImpl<Node>;

  /**
   * Parent node
   */
  parent: Node | null;
}
