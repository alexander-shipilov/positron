import { TreeSetImpl } from "./set/TreeSetImpl";
import type { TreeStoreItem } from "./types/TreeStoreItem";

export class TreeItemMap<Node> {
  private map: Map<Node, TreeStoreItem<Node>> = new Map();

  has(node: Node): boolean {
    return this.map.has(node);
  }

  get(node: Node): TreeStoreItem<Node> {
    let item = this.map.get(node);

    if (item == null) {
      item = { parent: null, children: new TreeSetImpl() };

      this.map.set(node, item);
    }

    return item;
  }
}
