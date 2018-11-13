// @flow

import { Base } from "../Base";
import type { BaseProps } from "../Base";

export type PromiseHandler<T: any> = (...any[]) => T;

export interface PromiseQueueProps<T, V> extends BaseProps {
    prev: ?PromiseQueue<any, any>;
    onResolve: ?PromiseHandler<T>;
    onReject: ?PromiseHandler<V>;
}

function resolver<T, U>(handler: PromiseHandler<T>): (U) => Promise<T> {
  return (value: U) => Promise.resolve(value).then(handler);
}

function createResolver<T, U>(handler: ?PromiseHandler<T>): void | (U) => Promise<T> {
  return handler ? resolver(handler) : void 0;
}

export class PromiseQueue<T: any, V: any> extends Base<PromiseQueueProps<T, V>> implements PromiseQueueProps<any, any> {
    prev: ?PromiseQueue<any, any>;

    onResolve: ?PromiseHandler<T>;

    onReject: ?PromiseHandler<V>;

    constructor(onResolve: ?PromiseHandler<T>, onReject?: PromiseHandler<V>, prev?: PromiseQueue<any, any>) {
      super({ prev, onResolve, onReject });
    }

    resolve<U: any>(promise: U | Promise<U>): Promise<T | V> {
      const { prev } = this;

      if (prev) {
        promise = prev.resolve(promise);
      } else if (!(promise instanceof Promise)) {
        promise = Promise.resolve(promise);
      }

      return promise.then(createResolver(this.onResolve), createResolver(this.onReject));
    }

    then<U, Z>(onResolve?: PromiseHandler<U>, onReject?: PromiseHandler<Z>): PromiseQueue<U, Z> | PromiseQueue<T, V> {
      return onResolve == null && onReject == null ? this : new PromiseQueue(onResolve, onReject, this);
    }

    catch(onReject?: PromiseHandler<V>): PromiseQueue<T, V> {
      return this.then(void 0, onReject);
    }

    valueOf(): PromiseQueueProps<T, V> {
      return super.valueOf();
    }
}
