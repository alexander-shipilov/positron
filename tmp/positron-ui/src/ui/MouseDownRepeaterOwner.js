import { MouseDownRepeater } from "positron-core/src/dom-event";

export class MouseDownRepeaterOwner {
    addRepeatMouseDownListener(element) {
        this.addUnmountListener(this.mouseDownRepeater.addRepeatEventListener(element));
    }

    initMouseDownRepeaterOwner() {
        this.mouseDownRepeater = new MouseDownRepeater({
            onRepeat: this.onRepeatMouseDown.bind(this),
            onRepeatEnd: this.onRepeatMouseDownEnd.bind(this)
        });
    }

    onRepeatMouseDown() {
    }

    onRepeatMouseDownEnd() {
    }

    setMouseDownRepeaterProps(...props) {
        this.mouseDownRepeater.setProps(...props);
    }

    stopMouseDownRepeater() {
        this.mouseDownRepeater.stop();
    }
}

