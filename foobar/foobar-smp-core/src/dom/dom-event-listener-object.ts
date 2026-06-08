import type { DomEvent } from "./dom-event";

export interface DomEventListenerObject {
  handleEvent(object: DomEvent): void;
}
