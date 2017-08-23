import { Base } from "../Base";

function onRepeaterTimeout(repeater, data) {
    repeater.onRepeat(data, repeater._count++);

    if (repeater._timeout) {
        repeater._timeout = null;
        setRepeaterTimeout(repeater, repeater.interval);
    } else {
        repeater._count = 0;
        repeater.onRepeatEnd(data, repeater._count);
    }
}

function clearRepeaterTimeout(repeater) {
    if (repeater._timeout) {
        clearTimeout(repeater._timeout);
        repeater._timeout = null;
    }

    return repeater;
}

function setRepeaterTimeout(repeater, timeout) {
    if (!repeater._timeout) {
        repeater._timeout = setTimeout(repeater.onTimeout, timeout);
    }

    return repeater;
}

export class Repeater extends Base {
    init(...props) {
        this.define({ _count: 0, _listeners: [], _timeout: null });

        super.init({ interval: 100 }, ...props);
    }

    onRepeat() {
    }

    onRepeatEnd() {
    }

    pause() {
        if (this.onTimeout) {
            this._timeout = null;
            this.onTimeout();
        }

        return this;
    }

    resume() {
        if (this.onTimeout) {
            return setRepeaterTimeout(this, this.firstInterval || this.interval);
        }

        return this;
    }

    setProps(...props) {
        return Object.assign(this, ...props);
    }

    start(props) {
        this.onTimeout = onRepeaterTimeout.bind(null, this, props);
        return this.resume();
    }

    stop() {
        if (this.onTimeout) {
            clearRepeaterTimeout(this);
            this.onTimeout();

            delete this.onTimeout;
        }

        return this;
    }
}
