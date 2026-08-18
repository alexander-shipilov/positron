import type { DomNode } from "./dom-node";
import type { DomNodeFilter } from "./dom-node-filter";

export interface DomTreeWalker {
  currentNode: DomNode;

  readonly filter: DomNodeFilter | null;

  readonly root: DomNode;

  readonly whatToShow: number;

  firstChild(): DomNode | null;

  lastChild(): DomNode | null;

  nextNode(): DomNode | null;

  nextSibling(): DomNode | null;

  parentNode(): DomNode | null;

  previousNode(): DomNode | null;

  previousSibling(): DomNode | null;
}
