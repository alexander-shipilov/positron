import type { DomNode } from "./dom-node";
import type { DomNonElementParentNode } from "./dom-non-element-parent-node";
import type { DomParentNode } from "./dom-parent-node";

export interface DomDocumentFragment
  extends DomNode, DomNonElementParentNode, DomParentNode {}
