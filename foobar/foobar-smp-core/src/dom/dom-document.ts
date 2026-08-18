import type { DomDocumentFragment } from "./dom-document-fragment";
import type { DomDocumentOrShadowRoot } from "./dom-document-or-shadow-root";
import type { DomElement } from "./dom-element";
import type { DomElementCreationOptions } from "./dom-element-creation-options";
import type { DomImplementation } from "./dom-implementation";
import type { DomImportNodeOptions } from "./dom-import-node-options";
import type { DomNode } from "./dom-node";
import type { DomNodeFilter } from "./dom-node-filter";
import type { DomNodeIterator } from "./dom-node-iterator";
import type { DomNonElementParentNode } from "./dom-non-element-parent-node";
import type { DomParentNode } from "./dom-parent-node";
import type { DomRange } from "./dom-range";
import type { DomString } from "./dom-string";
import type { DomText } from "./dom-text";
import type { DomTreeWalker } from "./dom-tree-walker";

export interface DomDocument
  extends
    DomDocumentOrShadowRoot,
    DomNode,
    DomNonElementParentNode,
    DomParentNode {
  readonly documentElement: DomElement | null;

  readonly implementation: DomImplementation;

  adoptNode(node: DomNode): DomNode;

  createDocumentFragment(): DomDocumentFragment;

  createElement(
    localName: DomString,
    options?: DomElementCreationOptions | DomString,
  ): DomElement;

  createNodeIterator(
    root: DomNode,
    whatToShow?: number,
    filter?: DomNodeFilter | null,
  ): DomNodeIterator;

  createRange(): DomRange;

  createTextNode(data: DomString): DomText;

  createTreeWalker(
    root: DomNode,
    whatToShow?: number,
    filter?: DomNodeFilter | null,
  ): DomTreeWalker;

  // getElementsByTagName(qualifiedName: DomString): HTMLCollection;

  importNode(node: DomNode, options?: boolean | DomImportNodeOptions): DomNode;
}
