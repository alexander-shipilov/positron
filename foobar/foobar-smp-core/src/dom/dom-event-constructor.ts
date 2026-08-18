import type { DomEvent } from "./dom-event";
import type { DomEventInit } from "./dom-event-init";
import type { DomString } from "./dom-string";

export interface DomEventConstructor {
  new (type: DomString, eventInit?: DomEventInit): DomEvent;
}
