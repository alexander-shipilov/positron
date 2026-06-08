import type { DomEvent } from "./dom-event";

export interface DomEventListener {
  (evt: DomEvent): void;
}
