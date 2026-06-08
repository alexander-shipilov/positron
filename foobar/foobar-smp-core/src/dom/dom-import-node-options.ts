import type { DomCustomElementRegistry } from "./dom-custom-element-registry";

export interface DomImportNodeOptions {
  customElementRegistry: DomCustomElementRegistry;

  selfOnly: boolean;
}
