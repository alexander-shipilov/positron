import type { DomDocumentFragment } from "../dom";
import { DomNodeType } from "../dom";

import type { Document } from "./document";
import { Node } from "./node";
import { NonElementParentNode } from "./non-element-parent-node";
import { ParentNode } from "./parent-node";

export class DocumentFragment
  extends NonElementParentNode(ParentNode(Node))
  implements DomDocumentFragment
{
  public get nodeName(): string {
    return "#document-fragment";
  }

  public get nodeType(): DomNodeType {
    return DomNodeType.DocumentFragment;
  }

  public get nodeValue(): null | string {
    return null;
  }

  public constructor(nodeDocument: Document) {
    super();

    this._document = nodeDocument;
  }
}
