import type { DomDocument } from "./dom-document";
import type { DomElement } from "./dom-element";
import type { DomEventTarget } from "./dom-event-target";
import type { DomGetRootNodeOptions } from "./dom-get-root-node-options";
import type { DomNodeList } from "./dom-node-list";
import type { DomNodeType } from "./dom-node-type";
import type { DomString } from "./dom-string";

/**
 * The {@link DomNode} interface is an abstract base class upon which many
 * other DOM API objects are based, thus letting those object types be used
 * similarly and often interchangeably. As an abstract class, there is no such
 * thing as a plain {@link DomNode} object. All objects that implement
 * {@link DomNode} functionality are based on one of its subclasses. Most
 * notable are {@link DomDocument}, {@link DomElement}, and
 * {@link DomDocumentFragment}.
 *
 * @public
 */
export interface DomNode extends DomEventTarget {
  /**
   * The read-only {@link DomNode.childNodes} property returns a live
   * {@link DomNodeList} of child nodes of the given element where the first
   * child node is assigned index `0`. Child nodes include elements, text and
   * comments.
   */
  readonly childNodes: DomNodeList;

  /**
   * The read-only {@link DomNode.firstChild} property returns the node's
   * first child in the tree, or `null` if the node has no children.
   *
   * If the node is a {@link DomDocument}, this property returns the first node
   * in the list of its direct children.
   */
  readonly firstChild: DomNode | null;

  /**
   * The read-only {@link DomNode.isConnected} property returns a boolean
   * indicating whether the node is connected (directly or indirectly) to a
   * {@link DomDocument} object.
   */
  readonly isConnected: boolean;

  /**
   * The read-only {@link DomNode.lastChild} property returns the last
   * child of the node, or `null` if there are no child nodes.
   */
  readonly lastChild: DomNode | null;

  /**
   * The read-only {@link DomNode.nextSibling} property returns the node
   * immediately following the specified one in their parent's
   * {@link DomNode.childNodes}, or returns `null` if the specified node is the
   * last child in the parent element.
   */
  readonly nextSibling: DomNode | null;

  /**
   * The read-only {@link DomNode.nodeName} property returns the name of the
   * current node as a string.
   */
  readonly nodeName: DomString;

  /**
   * The read-only {@link DomNode.nodeType} property is an integer that
   * identifies what the node is. It distinguishes different kinds of nodes
   * from each other, such as elements, text.
   */
  readonly nodeType: DomNodeType;

  /**
   * The {@link DomNode.nodeValue} property returns or sets the value of the
   * current node.
   */
  nodeValue: DomString | null;

  /**
   * The read-only {@link DomNode.ownerDocument} property returns the top-level
   * document object of the node.
   *
   * @remarks
   * If this property is used on a node that is itself a document, the value
   *   is `null`.
   */
  readonly ownerDocument: DomDocument | null;

  /**
   * The read-only {@link DomNode.parentElement} property returns the DOM
   * node's parent {@link DomElement}, or `null` if the node either has no
   * parent, or its parent isn't a {@link DomElement}.
   *
   * @remarks
   * {@link DomNode.parentNode} on the other hand returns any kind of
   *   parent, regardless of its type.
   */
  readonly parentElement: DomElement | null;

  /**
   * The read-only {@link DomNode.parentNode} property returns the parent of
   * the specified node in the DOM tree.
   *
   * @remarks
   * {@link DomDocument} and {@link DomDocumentFragment} nodes can never have a
   *   parent, so {@link DomNode.parentNode} will always return `null`. It also
   *   returns `null` if the node has just been created and is not yet attached
   *   to the tree. {@link DomNode.parentElement} on the other hand only
   *   returns {@link DomElement} nodes.
   */
  readonly parentNode: DomNode | null;

  /**
   * The read-only {@link DomNode.previousSibling} property returns the node
   * immediately preceding the specified one in its parent's
   * {@link DomNode.childNodes} list, or `null` if the specified node is the
   * first in that list.
   */
  readonly previousSibling: DomNode | null;

  /**
   * The {@link DomNode.textContent} property represents the text content of
   * the node and its descendants.
   */
  textContent: DomString | null;

  appendChild<TNode extends DomNode>(node: TNode): TNode;

  cloneNode(subtree?: boolean): DomNode;

  compareDocumentPosition(other: DomNode): number;

  contains(other: DomNode | null): boolean;

  getRootNode(options?: DomGetRootNodeOptions): DomNode;

  hasChildNodes(): boolean;

  insertBefore<TNode extends DomNode>(
    node: TNode,
    child: DomNode | null,
  ): TNode;

  isEqualNode(otherNode: DomNode): boolean;

  normalize(): void;

  removeChild<TNode extends DomNode>(child: TNode): TNode;

  replaceChild<TNode extends DomNode>(node: TNode, child: DomNode): TNode;
}
