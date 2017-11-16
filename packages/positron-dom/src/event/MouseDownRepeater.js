import { containsOrSelf } from "../containsOrSelf";
import { addEventListeners } from "./addEventListener";
import { EventRepeater } from "./EventRepeater";

export class MouseDownRepeater extends EventRepeater {
    onMouseDown = (event) => {
        event.preventDefault();

        this.start(event)
            .addEventListener(window, "mousemove", this.onMouseMove.bind(this, event.currentTarget), true)
            .addEventListener(window, "mouseup", this.onMouseUp, true);
    };

    onTouchStart = (event) => {
        event.preventDefault();

        this.start(event)
            .addEventListener(window, "touchmove", this.onTouchMove.bind(this, event.currentTarget), true)
            .addEventListener(window, "touchup touchend touchcancel", this.onTouchUp, true);
    };

    onMouseUp = () => {
        this.stop();
    };

    onTouchUp = () => {
        this.stop();
    };

    onMove(element, target) {
        const containsCursor = containsOrSelf(element, target);

        if (containsCursor) {
            this.resume();
        } else {
            this.pause();
        }
    }

    onMouseMove(element, event) {
        this.onMove(element, event.target);
    }

    onTouchMove(element, event) {
        this.onMove(element, event.changedTouches[0].target);
    }

    addRepeatEventListener(element) {
        return addEventListeners(element, { mousedown: this.onMouseDown, touchstart: this.onTouchStart }, true);
    }
}
