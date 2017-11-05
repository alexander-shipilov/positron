import { containsOrSelf } from "../index";
import { addEventListener } from "./addEventListener";
import { EventRepeater } from "./EventRepeater";

export class MouseDownRepeater extends EventRepeater {
    constructor(...props) {
        super(...props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onMouseDown(event) {
        this.start(event)
            .addEventListener(window, "mousemove", this.onMouseMove.bind(this, event.currentTarget), true)
            .addEventListener(window, "mouseup", this.onMouseUp, true);
    }

    onMouseMove(element, event) {
        const containsCursor = containsOrSelf(element, event.target);

        if (containsCursor) {
            this.resume();
        } else {
            this.pause();
        }
    }

    onMouseUp() {
        this.stop();
    }

    addRepeatEventListener(element) {
        return addEventListener(element, "mousedown", this.onMouseDown, true);
    }
}
