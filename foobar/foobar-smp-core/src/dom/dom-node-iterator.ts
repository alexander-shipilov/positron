import type { DomNode } from "./dom-node";
import type { DomNodeFilter } from "./dom-node-filter";

export interface DomNodeIterator {
  readonly filter: DomNodeFilter | null;

  readonly pointerBeforeReferenceNode: boolean;

  readonly referenceNode: DomNode;

  readonly root: DomNode;

  readonly whatToShow: number;

  detach(): void;

  nextNode(): DomNode | null;

  previousNode(): DomNode | null;
}
