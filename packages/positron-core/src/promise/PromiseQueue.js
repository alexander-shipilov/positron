// @flow

import { Base } from "../Base";

export type PromiseHandler<T: any> = (...any[]) => T;

function resolver<T, U>(handler: PromiseHandler<T>): (U) => Promise<T> {
    return (value: U) => Promise.resolve(value).then(handler);
}

function createResolver<T, U>(handler: ?PromiseHandler<T>): void | (U) => Promise<T> {
    return handler ? resolver(handler) : void 0;
}

export class PromiseQueue<T: any> extends Base {
    prev: PromiseQueue<any>;

    onResolve: ?PromiseHandler<T>;

    onReject: ?PromiseHandler<any>;

    constructor(onResolve: ?PromiseHandler<T>, onReject?: PromiseHandler<any>, prev?: PromiseQueue<any>) {
        super({ prev, onResolve, onReject });
    }

    resolve<U>(promise: U | Promise<U>): Promise<T> {
        const { prev, onResolve, onReject } = this;

        if (prev) {
            promise = prev.resolve(promise);
        } else if (!(promise instanceof Promise)) {
            promise = Promise.resolve(promise);
        }

        return promise.then(createResolver(onResolve), createResolver(onReject));
    }

    then<U>(onResolve?: PromiseHandler<U>, onReject?: PromiseHandler<any>): PromiseQueue<U> | PromiseQueue<T> {
        return onResolve == null && onReject == null ? this : new PromiseQueue(onResolve, onReject, this);
    }

    catch(onReject?: PromiseHandler<any>): PromiseQueue<T> {
        return this.then(void 0, onReject);
    }
}
