// @flow

import { Base } from "positron-core";

export type PublisherListener<T> = (...any) => T;

export type PublisherListenerRemover = () => void;

export class Publisher extends Base {
    _listeners: PublisherListener<any>[];

    get listeners(): PublisherListener<any>[] {
        return [].concat(this._listeners || []);
    }

    removeListener(handler: PublisherListener<any>): void {
        const { _listeners: listeners } = this;

        if (listeners && listeners.length) {
            this._listeners = listeners.filter((listener) => listener !== handler);
        }
    }

    addListener<T>(handler: PublisherListener<T>): PublisherListenerRemover {
        if (typeof handler !== "function") {
            throw new Error(String(this) + "#addHandler: function expected");
        }

        if (!this._listeners) {
            this.define({ _listeners: [] });
        }

        this._listeners.push(handler);

        return this.removeListener.bind(this, handler);
    }

    trigger(...args: any): Promise<void> {
        const { _listeners: listeners } = this;
        let promise = Promise.resolve();

        if (listeners && listeners.length) {
            promise = promise.then(() => Promise.all(listeners.map((listener) => Promise.resolve(listener(...args)))));
        }

        return promise.then(() => void 0);
    }
}
