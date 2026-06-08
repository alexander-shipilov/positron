import type { DomElement } from "./dom-element";
import type { DomNode } from "./dom-node";
import type { DomString } from "./dom-string";

export interface DomChildNode {
  readonly nextElementSibling: DomElement | null;

  readonly previousElementSibling: DomElement | null;

  after(...nodes: (DomNode | DomString)[]): void;

  before(...nodes: (DomNode | DomString)[]): void;

  remove(): void;

  replaceWith(...nodes: (DomNode | DomString)[]): void;
}
