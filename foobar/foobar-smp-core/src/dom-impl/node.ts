import { never } from "@positron/core";

import type {
  DomDocument,
  DomElement,
  DomGetRootNodeOptions,
  DomNode,
  DomNodeList,
  DomNodeType,
} from "../dom";

import type { Document } from "./document";
import { Element } from "./element";
import { EventTarget } from "./event-target";
import { OrderedSet } from "./ordered-set";

export class Node extends EventTarget implements DomNode {
  public readonly _children: OrderedSet<Node>;

  declare public _document: Document;

  public _nextSibling: Node | null;

  public _parent: Node | null = null;

  public _prevSibling: Node | null;

  public readonly isConnected: boolean;

  public readonly textContent: null | string;

  public get childNodes(): DomNodeList {
    return this._children;
  }

  public get firstChild(): DomNode | null {
    const { _children: childNodes } = this;

    return childNodes.length > 0 ? childNodes[0] : null;
  }

  public get lastChild(): DomNode | null {
    const { _children: childNodes } = this;

    return childNodes.length > 0 ? childNodes[childNodes.length - 1] : null;
  }

  public get nextSibling(): DomNode | null {
    return this._nextSibling;
  }

  public get nodeName(): string {
    return never("Not implemented");
  }

  public get nodeType(): DomNodeType {
    return never("Not implemented");
  }

  public get nodeValue(): null | string {
    return never("Not implemented");
  }

  public get ownerDocument(): DomDocument | null {
    return never("Not implemented");
  }

  public get parentElement(): DomElement | null {
    const { _parent: parent } = this;

    return parent instanceof Element ? parent : null;
  }

  public get parentNode(): DomNode | null {
    return this._parent;
  }

  public get previousSibling(): DomNode | null {
    return this._prevSibling;
  }

  public constructor() {
    super();

    this._children = new OrderedSet();
    this._nextSibling = null;
    this._prevSibling = null;
  }

  public appendChild<TNode extends DomNode>(node: TNode): TNode {
    return this.isValidNode(node)
      ? this._document._implementation.append(node, this)
      : never("Invalid node");
  }

  public cloneNode(subtree?: boolean): DomNode {
    throw new Error("Method not implemented.");
  }

  public compareDocumentPosition(other: DomNode): number {
    throw new Error("Method not implemented.");
  }

  public contains(other: DomNode | null): boolean {
    throw new Error("Method not implemented.");
  }

  public getRootNode(options?: DomGetRootNodeOptions): DomNode {
    throw new Error("Method not implemented.");
  }

  public hasChildNodes(): boolean {
    throw new Error("Method not implemented.");
  }

  public insertBefore<TNode extends DomNode>(
    node: TNode,
    child: DomNode | null,
  ): TNode {
    return this.isValidNode(node)
      ? this._document._implementation.insert(node, this, child)
      : never("Invalid node");
  }

  public isEqualNode(otherNode: DomNode): boolean {
    throw new Error("Method not implemented.");
  }

  public isValidNode(node: DomNode): node is Node {
    return (
      node instanceof Node &&
      node._document._implementation === this._document._implementation
    );
  }

  public normalize(): void {
    throw new Error("Method not implemented.");
  }

  public removeChild<TNode extends DomNode>(child: TNode): TNode {
    throw new Error("Method not implemented.");
  }

  public replaceChild<TNode extends DomNode>(
    node: TNode,
    child: DomNode,
  ): TNode {
    throw new Error("Method not implemented.");
  }
}
