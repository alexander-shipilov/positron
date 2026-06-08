import type { DomElement } from "./dom-element";

export interface DomCustomElementConstructor {
  new (): DomElement;
}
