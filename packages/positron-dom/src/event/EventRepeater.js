import { addEventListener } from "./addEventListener";
import { Repeater } from "./Repeater";

export class EventRepeater extends Repeater {
  addEventListener(element, event, listener, capture = false) {
    this._listeners.push(addEventListener(element, event, listener, capture));

    return this;
  }

  removeEventListeners() {
    this._listeners.forEach((removeListener) => removeListener());
    this._listeners.length = 0;

    return this;
  }

  stop() {
    return super.stop().removeEventListeners();
  }
}
