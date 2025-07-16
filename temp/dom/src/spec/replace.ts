import type { Tree } from "../Tree";
import { TreeException } from "../TreeException";
import { TreeExceptionNameEnum } from "../TreeExceptionName.enum";
import type { TreeNode } from "../TreeNode";
import { getParent } from "./getParent";
import { insert } from "./insert";
import { remove } from "./remove";

/**
 * https://dom.spec.whatwg.org/#concept-node-replace
 *
 * @param tree - Tree
 * @param child - Child
 * @param node - Node
 * @param parent - Paren
 */
export function replace<T extends TreeNode>(
  tree: Tree,
  child: T,
  node: TreeNode,
  parent: TreeNode
): T {
  // 1. If parent is not a Document, DocumentFragment, or Element node, then
  // throw a "HierarchyRequestError" DOMException.
  /* skip due any tree node can have children  */

  // 2. If node is a host-including inclusive ancestor of parent, then throw a
  // "HierarchyRequestError" DOMException.
  /* skip */

  // 3. If `child`’s [parent] is not `parent`, then throw a "NotFoundError"
  // DOMException.
  if (getParent(tree, child) !== parent) {
    throw new TreeException("tbd", TreeExceptionNameEnum.NotFoundError);
  }

  // 4. If node is not a DocumentFragment, DocumentType, Element, or
  // CharacterData node, then throw a "HierarchyRequestError" DOMException.
  /* skip due any tree node can be child  */

  // 5. If either node is a Text node and parent is a document, or node is a
  // doctype and parent is not a document, then throw a
  // "HierarchyRequestError" DOMException.
  /* skip */

  // 6. If `parent` is a document, and any of the statements below, switched on
  // the interface `node` implements, are true, then throw a
  // "HierarchyRequestError" DOMException.
  //
  // DocumentFragment
  // If `node` has more than one element child or has a Text node child.
  // Otherwise, if `node` has one element child and either parent has an
  // element child that is not child or a doctype is following child.
  //
  // Element
  // `parent` has an element child that is not `child` or a doctype is
  // following `child`.
  //
  // DocumentType
  // `parent` has a doctype child that is not `child`, or an element is
  // preceding child.  The above statements differ from the pre-insert
  // algorithm.
  /* skip due tree root node has no any limitation */

  // 7. Let `referenceChild` be `child`’s [next sibling].
  //
  // 8. If `referenceChild` is `node`, then set `referenceChild` to
  // `node`’s [next sibling].
  //
  // 9. Let `previousSibling` be `child`’s [previous sibling].
  //
  // 10. Let `removedNodes` be the empty set.
  /* skip */

  // 11. If `child`’s parent is non-null, then:
  if (getParent(tree, child) !== null) {
    // 11.1. Set `removedNodes` to « `child` ».
    /* skip */

    // 11.2. [remove] `child` with the suppress observers flag set.
    remove(tree, child);
  }

  // 12. Let `nodes` be `node`’s [children] if `node` is a DocumentFragment
  // node; otherwise « `node` ».
  /* skip */

  // 13. Insert `node` into `parent` before `referenceChild` with the suppress
  // observers flag set.
  insert(tree, node, parent, child);

  // 14. Queue a tree mutation record for parent with `nodes`, `removedNodes`,
  // `previousSibling`, and `referenceChild`.
  /* skip */

  // 15. Return child.
  return child;
}
