import type { DomCustomElementRegistry } from "./dom-custom-element-registry";
import type { DomString } from "./dom-string";

export interface DomElementCreationOptions {
  customElementRegistry: DomCustomElementRegistry | null;

  is: DomString;
}
