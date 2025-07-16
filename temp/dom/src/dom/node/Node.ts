import type { Document } from "../Document";
import type { List } from "../List";
import type { NodeAdoptingStep } from "./NodeAdoptingStep";
import type { NodeCloningStep } from "./NodeCloningStep";

/**
 * https://dom.spec.whatwg.org/#concept-node
 *
 * [Nodes] are objects that implement [Node].
 * [Nodes] participate in a tree, which is known as the node tree.
 */
export abstract class Node {
  abstract readonly adoptingStep: List<NodeAdoptingStep> | null;

  abstract readonly children: List<Node>;

  abstract readonly cloningStep: List<NodeCloningStep> | null;

  abstract readonly index: number;

  abstract nextSibling: Node | null;

  abstract nodeDocument: Document;

  abstract parent: Node | null;

  abstract previousSibling: Node | null;

  /**
   * https://dom.spec.whatwg.org/#concept-tree-root
   */
  get root(): Node {
    // The [root] of an object is itself, if its [parent] is null, or else it is
    // the [root] of its [parent].
    return this.parent ? this.parent.root : this;
  }
}
