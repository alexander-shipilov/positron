import { MouseDownRepeater } from "positron-core/dom-event";

export class MouseDownRepeaterOwner {
    initMouseDownRepeaterOwner() {
        this.mouseDownRepeater = new MouseDownRepeater({
            onRepeat: this.onRepeatMouseDown.bind(this),
            onRepeatEnd: this.onRepeatMouseDownEnd.bind(this)
        });
    }

    addRepeatMouseDownListener(element) {
        this.addUnmountListener(this.mouseDownRepeater.addRepeatEventListener(element));
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

