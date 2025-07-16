import type { Tree } from "../Tree";

import type { TreeNode } from "../TreeNode";
import type { TreeRoot } from "../TreeRoot";
import { adoptingSteps } from "./adoptingSteps";
import { getInclusiveDescendants } from "./getInclusiveDescendants";
import { getOwner } from "./getOwner";
import { getParent } from "./getParent";
import { remove } from "./remove";
import { setOwner } from "./setOwner";

/**
 * https://dom.spec.whatwg.org/#concept-node-adopt
 *
 * @param tree - Implementation
 * @param node - Node
 * @param root - Root
 */
export function adopt(tree: Tree, node: TreeNode, root: TreeRoot): void {
  // To adopt a `node` into a `root`, run these steps:

  // 1. Let `oldRoot` be `node`’s [node owner].
  const oldRoot = getOwner(tree, node);

  // 2. If `node`’s [parent] is non-null, then [remove] `node`.
  if (getParent(tree, node) !== null) {
    remove(tree, node);
  }

  // 3. If `root` is not `oldRoot`, then:
  if (root !== oldRoot) {
    // 3.1. For each `inclusiveDescendant` in `node`’s [inclusive descendants]:
    for (const inclusiveDescendant of getInclusiveDescendants(tree, node)) {
      // 3.1.1. Set `inclusiveDescendant`’s [node owner] to `root`.
      setOwner(tree, inclusiveDescendant, root);

      // 3.1.2. If `inclusiveDescendant` is an element, then set the
      // [node owner] of each attribute in `inclusiveDescendant`’s
      // [attributeList] to `root`.

      /* skip */
    }

    // 3.2. For each `inclusiveDescendant` in `node`’s
    // [shadow-including inclusive descendants] that is custom, enqueue a
    // custom element callback reaction with `inclusiveDescendant`, callback
    // name "adoptedCallback", and an argument list containing `oldRoot` and
    // `root`.

    /* skip */

    for (const inclusiveDescendant of getInclusiveDescendants(tree, node)) {
      // 3.3. For each `inclusiveDescendant` in node’s
      // [shadow-including inclusive descendants], in tree order, run the
      // [adopting steps] with `inclusiveDescendant` and `oldRoot`.
      adoptingSteps(tree, inclusiveDescendant, oldRoot);
    }
  }
}
