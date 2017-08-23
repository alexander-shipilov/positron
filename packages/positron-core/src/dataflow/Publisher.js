import { Base } from "../Base";

export class Publisher extends Base {
    get listeners() {
        return this._listeners.concat();
    }

    init() {
        this.define({ _listeners: [] });
    }

    addListener(handler) {
        if (typeof handler !== "function") {
            throw this.getError("function expected");
        }

        this._listeners.push(handler);

        return this.unlisten.bind(this, handler);
    }

    trigger(...data) {
        return Promise.all(this._listeners.map((listener) => Promise.resolve(listener(...data)))).then(() => void 0);
    }

    unlisten(handler) {
        this.define({
            listeners: this._listeners.filter((listener) => listener !== handler)
        });
    }
}
