// @flow

import { Base, PromiseQueue } from "positron-core";
import type { PublisherListener, PublisherListenerRemover } from "./Publisher";
import { Publisher } from "./Publisher";

export class Listener<T> extends Base {
    _publisher: Publisher;

    _handler: PublisherListener<T>;

    _queue: PromiseQueue<T>;

    _unlisten: PublisherListenerRemover;

    get publisher(): Publisher {
      return this._publisher;
    }

    get handler(): PublisherListener<T> {
      return this._handler;
    }

    get disabled() {
      return this._unlisten === void 0;
    }

    constructor(publisher: Publisher, handler: PublisherListener<T>) {
      super();

      if (!(publisher instanceof Publisher)) {
        throw this.getError("publisher: Publisher expected");
      }

      if (typeof handler !== "function") {
        throw this.getError("handler: function expected");
      }

      this.define({ _publisher: publisher, _handler: handler, _queue: new PromiseQueue() })
          .enable();
    }

    enable(): Listener<T> {
      const { handler, publisher } = this;

      if (this.disabled) {
        this._unlisten = publisher.addListener((...args) => this._queue.resolve(handler(...args)));
      }

      return this;
    }

    disable(): Listener<T> {
      const { _unlisten: unlisten } = this;

      if (!this.disabled) {
        this._unlisten = void 0;
        unlisten();
      }

      return this;
    }

    then<U>(onResolve: ?PublisherListener<U>, onReject: ?PublisherListener<any>): Listener<U> {
      return this.define({ _queue: this._queue.then(onResolve, onReject) });
    }

    catch(onReject: ?PublisherListener<any>): Listener<T> {
      return this.define({ _queue: this._queue.catch(onReject) });
    }
}
