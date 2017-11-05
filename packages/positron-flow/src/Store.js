import { forEach, of } from "positron-core";
import { ImmutableObject } from "positron-immutable";
import { Publisher } from "./Publisher";

export class Store extends of(Publisher, { Type: ImmutableObject }) {
    static get Type() {
        return this.types.Type;
    }

    static of(Type) {
        return super.of({ Type });
    }

    static toString() {
        return super.toString(this.Type.name);
    }

    get Type() {
        return this.constructor.Type;
    }

    constructor(state) {
        super();
        this.setState(state);
    }

    listen(publisher, name) {
        const handler = this[name];

        if (typeof handler === "function") {
            publisher.addListener(handler.bind(this));
        }

        return this;
    }

    listenAll(actions) {
        forEach(actions, (action, name) => this.listen(action, name));

        return this;
    }

    setState(nextState) {
        const { Type } = this;
        let promise;

        nextState = Type.assign(this.state, nextState);
        if (this.state !== nextState) {
            promise = Promise.resolve(this.state = nextState).then((state) => this.trigger(state));
        }

        return promise || Promise.resolve(this.state);
    }

    toString() {
        return super.toString(this.Type.name);
    }
}
