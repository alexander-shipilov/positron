import type {
  DomCustomElementRegistry,
  DomElement,
  DomShadowRoot,
  DomShadowRootInit,
  DomString,
} from "../dom";
import { DomNodeType } from "../dom";

import type { Document } from "./document";
import { ChildNode } from "./child-node";
import { Node } from "./node";
import { ParentNode } from "./parent-node";

export class Element extends ParentNode(ChildNode(Node)) implements DomElement {
  public customElementRegistry: DomCustomElementRegistry | null;

  public id: DomString;

  public localName: DomString;

  public nextElementSibling: DomElement | null;

  public previousElementSibling: DomElement | null;

  public shadowRoot: DomShadowRoot | null;

  public tagName: DomString;

  public get nodeName(): string {
    return "#document-fragment";
  }

  public get nodeType(): DomNodeType {
    return DomNodeType.Element;
  }

  public get nodeValue(): null | string {
    return null;
  }

  public constructor(nodeDocument: Document) {
    super();

    this._document = nodeDocument;
  }

  public attachShadow(init: DomShadowRootInit): DomShadowRoot {
    throw new Error("Method not implemented.");
  }

  public getAttribute(qualifiedName: DomString): DomString | null {
    throw new Error("Method not implemented.");
  }

  public getAttributeNames(): DomString[] {
    throw new Error("Method not implemented.");
  }

  public hasAttribute(qualifiedName: DomString): boolean {
    throw new Error("Method not implemented.");
  }

  public hasAttributes(): boolean {
    throw new Error("Method not implemented.");
  }

  public removeAttribute(qualifiedName: DomString): void {
    throw new Error("Method not implemented.");
  }

  public setAttribute(qualifiedName: DomString, value: DomString): void {
    throw new Error("Method not implemented.");
  }

  public toggleAttribute(qualifiedName: DomString, force?: boolean): boolean {
    throw new Error("Method not implemented.");
  }
}
