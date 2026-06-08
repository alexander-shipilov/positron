import type { DomAbstractRange } from "./dom-abstract-range";
import type { DomDocumentFragment } from "./dom-document-fragment";
import type { DomNode } from "./dom-node";

export interface DomRange extends DomAbstractRange {
  readonly commonAncestorContainer: DomNode;

  cloneContents(): DomDocumentFragment;

  cloneRange(): DomRange;

  collapse(toStart?: boolean): void;

  compareBoundaryPoints(how: number, sourceRange: DomRange): number;

  comparePoint(node: DomNode, offset: number): number;

  deleteContents(): void;

  detach(): void;

  extractContents(): DomDocumentFragment;

  insertNode(node: DomNode): void;

  // const unsigned short START_TO_START = 0;
  // const unsigned short START_TO_END = 1;
  // const unsigned short END_TO_END = 2;
  // const unsigned short END_TO_START = 3;

  intersectsNode(node: DomNode): boolean;

  isPointInRange(node: DomNode, offset: number): boolean;

  selectNode(node: DomNode): void;

  selectNodeContents(node: DomNode): void;

  setEnd(node: DomNode, offset: number): void;

  setEndAfter(node: DomNode): void;

  setEndBefore(node: DomNode): void;

  setStart(node: DomNode, offset: number): void;

  setStartAfter(node: DomNode): void;

  setStartBefore(node: DomNode): void;

  surroundContents(newParent: DomNode): void;
}
