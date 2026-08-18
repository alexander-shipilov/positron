import type { DomCustomElementRegistry, DomDocumentOrShadowRoot } from "../dom";

import type { NodeClass } from "./node-class";

export function DocumentOrShadowRoot<TNode extends NodeClass>(Node: TNode) {
  return class DocumentOrShadowRoot
    extends Node
    implements DomDocumentOrShadowRoot
  {
    public customElementRegistry: DomCustomElementRegistry | null;
  };
}
