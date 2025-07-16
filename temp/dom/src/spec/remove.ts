import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { assert } from "../utils/assert";
import { isNonNull } from "../utils/isNonNull";
import { tbd } from "../utils/tbd";
import { childrenChangedSteps } from "./childrenChangedSteps";
import { getChildren } from "./getChildren";
import { getDescendants } from "./getDescendants";
import { getParent } from "./getParent";
import { removingSteps } from "./removingSteps";

/**
 * https://dom.spec.whatwg.org/#concept-node-remove
 *
 * @param tree - Tree
 * @param node - Node
 */
export function remove(
  tree: Tree,
  node: TreeNode,
  suppressObserversFlag = false
): void {
  // To remove a `node`, with an optional `suppress observers flag`,
  // run these steps:

  // 1. Let `parent` be node’s node [parent].
  // 2. Assert: `parent` is non-null.
  const parent = assert(getParent(tree, node), isNonNull);

  // 3. Let `index` be node’s [index].
  //
  // 4. For each live range whose start node is an [inclusiveDescendantOf]
  // `node`, set its start to (`parent`, `index`).
  //
  // 5. For each live range whose end node is an [inclusiveDescendantOf]
  // `node`, set its end to (`parent`, `index`).
  //
  // 6. For each live range whose start node is `parent` and start offset is
  // greater than `index`, decrease its start offset by 1.
  //
  // 7. For each live range whose end node is `parent` and end offset is
  // greater than `index`, decrease its end offset by 1.
  //
  // 8. For each TreeNodeIterator object `iterator` whose root’s [nodeRoot] is
  // node’s [nodeRoot], run the TreeNodeIterator pre-removing steps given
  // `node` and `iterator`.
  //
  // 9. Let `oldPreviousSibling` be `node`’s [previousSibling].
  //
  // 10. Let `oldNextSibling` be `node`’s [nextSibling].

  /* skip */

  // 11. Remove `node` from its parent’s [children].
  getChildren(tree, parent).removeItem(node);

  // 12. If node is assigned, then run assign slottables for `node`’s assigned
  // slot.
  // 13. If `parent`’s root is a shadow root, and parent is a slot whose
  // assigned nodes is the empty list, then run signal a slot change for
  // parent.
  // 14. If node has an [inclusive descendant] that is a slot, then:
  // 14.1. Run assign slottables for a tree with parent’s root.
  // 14.2. Run assign slottables for a tree with node.

  /* skip */

  // 15. Run the [removing steps] with `node` and `parent`.
  removingSteps(tree, node, parent);

  // 16. Let `isParentConnected` be `parent`’s connected.
  // 17. If `node` is custom and `isParentConnected` is `true`, then enqueue a
  // custom element callback reaction with `node`, callback name
  // "disconnectedCallback", and an empty argument list.
  // It is intentional for now that custom elements do not get parent passed.
  // This might change in the future if there is a need.
  /* skip */

  tbd();
  // 18. For each [shadow-including descendant] `descendant` of `node`, in
  // shadow-including tree order, then:
  for (const descendant of getDescendants(tree, node)) {
    // 18.1 Run the [removing steps] with `descendant`.
    removingSteps(tree, descendant);

    // 18.2 If descendant is custom and `isParentConnected` is true, then
    // enqueue a custom element callback reaction with `descendant`, callback
    // name "disconnectedCallback", and an empty argument list.
    /* skip */
  }

  // 19. For each inclusive ancestor `inclusiveAncestor` of parent, and then for
  // each registered of `inclusiveAncestor`’s registered observer list, if
  // registered’s options["subtree"] is true, then append a new transient
  // registered observer whose observer is registered’s observer, options is
  // registered’s options, and source is registered to `node`’s registered
  // observer list.
  // 20. If suppress observers flag is unset, then queue a tree mutation record
  // for parent with « », « node », `oldPreviousSibling`, and `oldNextSibling`.
  /* skip */

  // 21. Run the [children changed steps] for parent.
  childrenChangedSteps(tree, parent);
}
