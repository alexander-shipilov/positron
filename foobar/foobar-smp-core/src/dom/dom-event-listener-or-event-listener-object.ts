import type { DomEventListener } from "./dom-event-listener";
import type { DomEventListenerObject } from "./dom-event-listener-object";

export type DomEventListenerOrEventListenerObject =
  | DomEventListener
  | DomEventListenerObject;
