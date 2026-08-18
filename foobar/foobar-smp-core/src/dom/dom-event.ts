import type { DomEventPhase } from "./dom-event-phase";
import type { DomEventTarget } from "./dom-event-target";
import type { DomHighResTimeStamp } from "./dom-high-res-time-stamp";
import type { DomString } from "./dom-string";

export interface DomEvent {
  readonly bubbles: boolean;

  readonly cancelable: boolean;

  readonly composed: boolean;

  readonly currentTarget: DomEventTarget | null;

  readonly defaultPrevented: boolean;

  readonly eventPhase: DomEventPhase;

  readonly target: DomEventTarget | null;

  readonly timeStamp: DomHighResTimeStamp;

  readonly type: DomString;

  composedPath(): DomEventTarget[];

  preventDefault(): void;

  stopImmediatePropagation(): void;

  stopPropagation(): void;
}
