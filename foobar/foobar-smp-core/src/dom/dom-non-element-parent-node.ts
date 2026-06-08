import type { DomElement } from "./dom-element";
import type { DomString } from "./dom-string";

export interface DomNonElementParentNode {
  getElementById(elementId: DomString): DomElement | null;
}
