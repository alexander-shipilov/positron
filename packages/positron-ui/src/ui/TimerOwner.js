const TYPE_TIMEOUT = 1;
const TYPE_INTERVAL = 2;

function setTimer(target, type, ...args) {
    const isInterval = type === TYPE_INTERVAL;
    const id = (isInterval ? setInterval : setTimeout)(...args);

    target.timers[id] = (isInterval ? clearInterval : clearTimeout).bind(null, id);

    return id;
}

function clearTimer(target, id) {
    const timers = target.timers;
    if (timers && timers.hasOwnProperty(id)) {
        timers[id]();
        delete timers[id];
    }
}

export class TimerOwner {
    clearTimer(id) {
        clearTimer(this, id);
    }

    componentWillUnmount() {
        Object.keys(this.timers).forEach((id) => {
            clearTimer(this, id);
        });
    }

    initTimerOwner() {
        this.define({ timers: {} });
    }

    isTimerStarted(timerId) {
        return this.timers.hasOwnProperty(timerId);
    }

    setInterval(...args) {
        return setTimer(this, TYPE_INTERVAL, ...args);
    }

    setTimeout(...args) {
        return setTimer(this, TYPE_TIMEOUT, ...args);
    }
}
