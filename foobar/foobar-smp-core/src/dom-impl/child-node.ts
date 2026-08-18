import type { DomChildNode, DomElement, DomNode, DomString } from "../dom";

import type { NodeClass } from "./node-class";

export function ChildNode<TNode extends NodeClass>(Node: TNode) {
  return class ChildNode extends Node implements DomChildNode {
    public nextElementSibling: DomElement | null = null;

    public previousElementSibling: DomElement | null = null;

    public after(...nodes: (DomNode | DomString)[]): void {
      throw new Error("Method not implemented.");
    }

    public before(...nodes: (DomNode | DomString)[]): void {
      throw new Error("Method not implemented.");
    }

    public remove(): void {
      throw new Error("Method not implemented.");
    }

    public replaceWith(...nodes: (DomNode | DomString)[]): void {
      throw new Error("Method not implemented.");
    }
  };
}
