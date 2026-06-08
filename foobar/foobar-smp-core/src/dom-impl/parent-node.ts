import type { DomElement, DomNode, DomParentNode, DomString } from "../dom";

import type { NodeClass } from "./node-class";

export function ParentNode<TNode extends NodeClass>(Node: TNode) {
  return class ParentNode extends Node implements DomParentNode {
    public childElementCount: number = 0;

    public firstElementChild: DomElement | null = null;

    public lastElementChild: DomElement | null = null;

    public append(...nodes: (DomNode | DomString)[]): void {
      throw new Error("Method not implemented.");
    }

    public moveBefore(node: DomNode, child: DomNode | null): void {
      throw new Error("Method not implemented.");
    }

    public prepend(...nodes: (DomNode | DomString)[]): void {
      throw new Error("Method not implemented.");
    }

    public replaceChildren(...nodes: (DomNode | DomString)[]): void {
      throw new Error("Method not implemented.");
    }
  };
}
