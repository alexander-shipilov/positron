import type {
  DomAddEventListenerOptions,
  DomEvent,
  DomEventListenerOptions,
  DomEventListenerOrEventListenerObject,
  DomEventTarget,
} from "../dom";

export const listeners = Symbol("listeners");

export class EventTarget implements DomEventTarget {
  public _listeners: unknown[];

  public constructor() {
    this._listeners = [];
  }

  public addEventListener(
    type: string,
    callback: DomEventListenerOrEventListenerObject | null,
    options?: boolean | DomAddEventListenerOptions,
  ): void {
    throw new Error("Method not implemented.");
  }

  public dispatchEvent(event: DomEvent): boolean {
    throw new Error("Method not implemented.");
  }

  public removeEventListener(
    type: string,
    callback: DomEventListenerOrEventListenerObject | null,
    options?: boolean | DomEventListenerOptions,
  ): void {
    throw new Error("Method not implemented.");
  }
}
