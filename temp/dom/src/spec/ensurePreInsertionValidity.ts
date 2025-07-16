import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { tbd } from "../utils/tbd";

export function ensurePreInsertionValidity(
  tree: Tree,
  node: TreeNode,
  parent: TreeNode,
  child: TreeNode | null
): void {
  // To ensure pre-insertion validity of a `node` into a `parent` before a
  // `child`, run these steps:

  // 1. If `parent` is not a Document, DocumentFragment, or Element node, then
  // throw a "HierarchyRequestError" DOMException.
  tbd();

  // 2. If `node` is a host-including inclusive ancestor of parent, then throw a
  // "HierarchyRequestError" DOMException.
  tbd();

  // 3. If `child` is non-null and its parent is not `parent`, then throw a
  // "NotFoundError" DOMException.
  tbd();

  // 4. If `node` is not a DocumentFragment, DocumentType, Element, or
  // CharacterData node, then throw a "HierarchyRequestError" DOMException.
  tbd();

  // 5. If either `node` is a Text node and `parent` is a document, or `node`
  // is a doctype and `parent` is not a document, then throw a
  // "HierarchyRequestError" DOMException.
  tbd();

  // 6. If `parent` is a document, and any of the statements below, switched on
  // the interface `node` implements, are true, then throw a
  // "HierarchyRequestError" DOMException.
  //
  // DocumentFragment
  // If `node` has more than one element child or has a Text node child.
  // Otherwise, if node has one element child and either `parent` has an
  // element
  // child, child is a doctype, or `child` is non-null and a doctype is
  // following child.
  //
  // Element
  // `parent` has an element child, `child` is a doctype, or `child`
  // is non-null and a doctype is following `child`.
  //
  // DocumentType
  // `parent` has a doctype child, `child` is non-null and an element is
  // preceding `child`, or `child` is null and `parent` has an element child.
  tbd();
}
