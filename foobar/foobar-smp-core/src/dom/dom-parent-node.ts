import type { DomElement } from "./dom-element";
import type { DomNode } from "./dom-node";
import type { DomString } from "./dom-string";

export interface DomParentNode {
  readonly childElementCount: number;

  // readonly children: HTMLCollection;

  readonly firstElementChild: DomElement | null;

  readonly lastElementChild: DomElement | null;

  append(...nodes: (DomNode | DomString)[]): void;

  moveBefore(node: DomNode, child: DomNode | null): void;

  prepend(...nodes: (DomNode | DomString)[]): void;

  replaceChildren(...nodes: (DomNode | DomString)[]): void;
}
