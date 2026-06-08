import type { DomElement, DomNonElementParentNode, DomString } from "../dom";

import type { NodeClass } from "./node-class";

export function NonElementParentNode<TNode extends NodeClass>(Node: TNode) {
  return class NonElementParentNode
    extends Node
    implements DomNonElementParentNode
  {
    public getElementById(elementId: DomString): DomElement | null {
      throw new Error("Method not implemented.");
    }
  };
}
