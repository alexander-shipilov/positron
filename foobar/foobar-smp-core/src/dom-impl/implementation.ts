import type { DomDocument, DomImplementation, DomNode } from "../dom";

import type { Node } from "./node";

export class Implementation implements DomImplementation {
  public append<TNode extends Node>(node: TNode, parent: Node): TNode {
    return this.insert(node, parent, null);
  }

  public createDocument(): DomDocument {
    throw new Error("Method not implemented.");
  }

  public insert<TNode extends Node>(
    node: TNode,
    parent: Node,
    child: DomNode | null,
  ): TNode {
    return node;
  }
}
