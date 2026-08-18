import type {
  DomDocument,
  DomDocumentFragment,
  DomElement,
  DomElementCreationOptions,
  DomImplementation,
  DomImportNodeOptions,
  DomNode,
  DomNodeFilter,
  DomNodeIterator,
  DomRange,
  DomString,
  DomText,
  DomTreeWalker,
} from "../dom";
import { DomNodeType } from "../dom";

import type { Implementation } from "./implementation";
import { DocumentOrShadowRoot } from "./document-or-shadow-root";
import { Node } from "./node";
import { NonElementParentNode } from "./non-element-parent-node";
import { ParentNode } from "./parent-node";

/**
 *
 * @public
 */
export class Document
  extends DocumentOrShadowRoot(NonElementParentNode(ParentNode(Node)))
  implements DomDocument
{
  public readonly _implementation: Implementation;

  public documentElement: DomElement | null;

  public get implementation(): DomImplementation {
    return this._implementation;
  }

  public get nodeName(): string {
    return "#document";
  }

  public get nodeType(): DomNodeType {
    return DomNodeType.Document;
  }

  public get nodeValue(): null | string {
    return null;
  }

  public get ownerDocument(): DomDocument | null {
    return null;
  }

  public constructor(documentImplementation: Implementation) {
    super();

    this._implementation = documentImplementation;
    this._document = this;
  }

  public adoptNode(node: DomNode): DomNode {
    throw new Error("Method not implemented.");
  }

  public createDocumentFragment(): DomDocumentFragment {
    throw new Error("Method not implemented.");
  }

  public createElement(
    localName: DomString,
    options?: DomElementCreationOptions | DomString,
  ): DomElement {
    throw new Error("Method not implemented.");
  }

  public createNodeIterator(
    root: DomNode,
    whatToShow?: number,
    filter?: DomNodeFilter | null,
  ): DomNodeIterator {
    throw new Error("Method not implemented.");
  }

  public createRange(): DomRange {
    throw new Error("Method not implemented.");
  }

  public createTextNode(data: DomString): DomText {
    throw new Error("Method not implemented.");
  }

  public createTreeWalker(
    root: DomNode,
    whatToShow?: number,
    filter?: DomNodeFilter | null,
  ): DomTreeWalker {
    throw new Error("Method not implemented.");
  }

  public importNode(
    node: DomNode,
    options?: boolean | DomImportNodeOptions,
  ): DomNode {
    throw new Error("Method not implemented.");
  }
}
