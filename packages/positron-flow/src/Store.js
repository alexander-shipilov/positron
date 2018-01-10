// @flow

import { forEach, isEqualObjects } from "positron-core";
import { Publisher } from "./Publisher";

export interface StoreState {
}

export class Store extends Publisher {
    state: StoreState;

    constructor(state?: StoreState) {
        super();
        this.setState(state);
    }

    listen(publisher: Publisher, name: string): Store {
        const handler = this[name];

        if (typeof handler === "function") {
            publisher.addListener(handler.bind(this));
        }

        return this;
    }

    listenAll(publishers: { [string]: Publisher }): Store {
        forEach(publishers, this.listen, this);

        return this;
    }

    trigger() {
        if (!this._triggerPromise) {
            this._triggerPromise = new Promise((resolve) => {
                setTimeout(() => {
                    delete this._triggerPromise;

                    resolve(super.trigger(this.state));
                });
            });
        }

        return this._triggerPromise;
    }

    setState(nextState) {
        const { state } = this;

        if (nextState !== state) {
            nextState = nextState == null ? nextState : Object.assign({}, state, nextState);

            if (!isEqualObjects(nextState, state)) {
                this.state = nextState;
            }
        }

        return this.state === state ? Promise.resolve(this.state) : this.trigger();
    }
}
