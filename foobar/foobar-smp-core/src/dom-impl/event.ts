import type {
  DomEvent,
  DomEventInit,
  DomEventTarget,
  DomHighResTimeStamp,
  DomString,
} from "../dom";
import { DomEventPhase } from "../dom";

export class Event implements DomEvent {
  public _bubbles: boolean;

  public _cancelable: boolean;

  public _composed: boolean;

  public _currentTarget: DomEventTarget | null = null;

  public _eventPhase: DomEventPhase = DomEventPhase.None;

  public _flags: number = 0;

  public _target: DomEventTarget | null = null;

  public _timeStamp: DomHighResTimeStamp;

  public _type: DomString;

  public get bubbles(): boolean {
    return this._bubbles;
  }

  public get cancelable(): boolean {
    return this._cancelable;
  }

  public get composed(): boolean {
    return this._composed;
  }

  public get currentTarget(): DomEventTarget | null {
    return this._currentTarget;
  }

  public get defaultPrevented(): boolean {
    throw new Error("Method not implemented.");
  }

  public get eventPhase(): DomEventPhase {
    return this._eventPhase;
  }

  public get target(): DomEventTarget | null {
    return this._target;
  }

  public get timeStamp(): DomHighResTimeStamp {
    return this._timeStamp;
  }

  public get type(): DomString {
    return this._type;
  }

  public constructor(type: DomString, init: DomEventInit = {}) {
    this._type = type;
    this._bubbles = init.bubbles ?? false;
    this._cancelable = init.cancelable ?? false;
    this._composed = init.composed ?? false;
    this._timeStamp = Date.now();
  }

  public composedPath(): DomEventTarget[] {
    throw new Error("Method not implemented.");
  }

  public preventDefault(): void {
    throw new Error("Method not implemented.");
  }

  public stopImmediatePropagation(): void {
    throw new Error("Method not implemented.");
  }

  public stopPropagation(): void {
    throw new Error("Method not implemented.");
  }
}
