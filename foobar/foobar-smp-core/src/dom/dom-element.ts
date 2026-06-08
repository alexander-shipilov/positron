import type { DomChildNode } from "./dom-child-node";
import type { DomCustomElementRegistry } from "./dom-custom-element-registry";
import type { DomNode } from "./dom-node";
import type { DomParentNode } from "./dom-parent-node";
import type { DomShadowRoot } from "./dom-shadow-root";
import type { DomShadowRootInit } from "./dom-shadow-root-init";
import type { DomString } from "./dom-string";

export interface DomElement extends DomChildNode, DomNode, DomParentNode {
  readonly customElementRegistry: DomCustomElementRegistry | null;

  id: DomString;

  readonly localName: DomString;

  readonly shadowRoot: DomShadowRoot | null;

  readonly tagName: DomString;

  attachShadow(init: DomShadowRootInit): DomShadowRoot;

  getAttribute(qualifiedName: DomString): DomString | null;

  // readonly attributes: NamedNodeMap;

  getAttributeNames(): DomString[];

  hasAttribute(qualifiedName: DomString): boolean;

  hasAttributes(): boolean;

  removeAttribute(qualifiedName: DomString): void;

  setAttribute(qualifiedName: DomString, value: DomString): void;

  toggleAttribute(qualifiedName: DomString, force?: boolean): boolean;

  // getElementsByTagName(qualifiedName: DomString): HTMLCollection;
}
