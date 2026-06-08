import type { DomCustomElementRegistry } from "./dom-custom-element-registry";

export interface DomDocumentOrShadowRoot {
  readonly customElementRegistry: DomCustomElementRegistry | null;
}
