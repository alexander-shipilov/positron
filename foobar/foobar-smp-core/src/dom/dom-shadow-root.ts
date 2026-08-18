import type { DomDocumentFragment } from "./dom-document-fragment";
import type { DomDocumentOrShadowRoot } from "./dom-document-or-shadow-root";
import type { DomElement } from "./dom-element";
import type { DomShadowRootMode } from "./dom-shadow-root-mode";

export interface DomShadowRoot
  extends DomDocumentFragment, DomDocumentOrShadowRoot {
  readonly clonable: boolean;

  readonly host: DomElement;

  readonly mode: DomShadowRootMode;

  readonly serializable: boolean;
}
