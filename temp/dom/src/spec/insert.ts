import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { isFragment } from "../utils/isFragment";
import { adopt } from "./adopt";
import { childrenChangedSteps } from "./childrenChangedSteps";
import { getChildren } from "./getChildren";
import { getOwner } from "./getOwner";
import { getShadowIncludingInclusiveDescendants } from "./getShadowIncludingInclusiveDescendants";
import { insertingSteps } from "./insertingSteps";
import { remove } from "./remove";

/**
 * @param tree - Tree
 * @param node - Node
 * @param parent - Parent
 * @param child - Child
 */
export function insert(
  tree: Tree,
  node: TreeNode,
  parent: TreeNode,
  child: TreeNode | null
): void {
  const isFragmentNode = isFragment(node);

  // 1. Let `nodes` be `node`’s [children], if `node` is a DocumentFragment
  // node; otherwise « `node` ».
  const nodes = isFragmentNode ? getChildren(tree, node) : [node];

  // 2. Let `count` be `nodes`’s size.
  const { length: count } = nodes;

  // 3.  If `count` is 0, then return.
  if (count === 0) {
    return;
  }

  // 4. If `node` is a DocumentFragment node, then:
  if (isFragmentNode) {
    // 4.1. [Remove] its [children] with the `suppress observers flag` set.
    for (const child of nodes) {
      remove(tree, child, true);
    }

    // 4.2. Queue a tree mutation record for `node` with « », `nodes`, null, and
    // null. This step intentionally does not pay attention to the suppress
    // observers flag.
    /* skip */
  }

  // 5. If child is non-null, then:
  //
  // 5.1. For each live range whose start node is `parent` and start offset is
  // greater than `child`’s index, increase its start offset by count.
  //
  // 5.2. For each live range whose end node is `parent` and end offset is
  // greater than `child`’s index, increase its end offset by count.
  /* skip */

  // 6. Let `previousSibling` be `child`’s previous sibling or `parent`’s last
  // child if `child` is null.
  /* skip */

  // 7. For each `node` in `nodes`, in tree order:
  for (const node of nodes) {
    // 7.1. [Adopt] `node` into `parent`’s [node document].
    adopt(tree, node, getOwner(tree, parent));

    // 7.2. If `child` is null, then append `node` to `parent`’s children.
    // 7.3. Otherwise, insert `node` into `parent`’s children before `child`’s
    // index.
    getChildren(tree, parent).insertItem(node, child);

    // 7.4. If `parent` is a shadow host whose shadow root’s slot assignment is
    // "named" and `node` is a slottable, then assign a slot for `node`.
    //
    // 7.5. If `parent`’s root is a shadow root, and `parent` is a slot whose
    // assigned nodes is the empty list, then run signal a slot change for
    // `parent`.
    //
    // 7.6. Run assign slottables for a tree with node’s root.
    /* skip */

    // 7.7. For each [shadow-including inclusive descendant]
    // `inclusiveDescendant` of `node`, in shadow-including tree order:
    for (const inclusiveDescendant of getShadowIncludingInclusiveDescendants(
      tree,
      node
    )) {
      // 7.7.1. Run the [insertion steps] with `inclusiveDescendant`.
      insertingSteps(tree, inclusiveDescendant);

      // 7.7.2. If `inclusiveDescendant` is [connected], then:
      //
      // 7.7.2.1 If `inclusiveDescendant` is custom, then enqueue a custom
      // element callback reaction with inclusiveDescendant, callback name
      // "connectedCallback", and an empty argument list.
      //
      // 7.7.2.1  Otherwise, try to upgrade `inclusiveDescendant`. If this
      // successfully upgrades `inclusiveDescendant`, its connectedCallback will
      // be enqueued automatically during the upgrade an element algorithm.
      /* skip */
    }
  }

  // 8. If suppress observers flag is unset, then queue a tree mutation record
  // for parent with nodes, « », previousSibling, and child.
  /* skip */

  // 9. Run the [children changed steps] for `parent`.
  childrenChangedSteps(tree, parent);
}
