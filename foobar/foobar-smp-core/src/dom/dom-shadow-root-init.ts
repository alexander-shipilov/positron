import type { DomCustomElementRegistry } from "./dom-custom-element-registry";
import type { DomShadowRootMode } from "./dom-shadow-root-mode";

export interface DomShadowRootInit {
  clonable?: boolean;

  customElementRegistry?: DomCustomElementRegistry | null;

  mode: DomShadowRootMode;

  serializable?: boolean;
}
