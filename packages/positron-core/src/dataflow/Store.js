import { of } from "../func";
import { InvariableObject } from "../invariable";
import { forEach } from "../object";
import { Publisher } from "./Publisher";

export class Store extends of(Publisher, { Type: InvariableObject }) {
    static get Type() {
        return this.types.Type;
    }

    get Type() {
        return this.constructor.Type;
    }

    static of(Type) {
        return super.of({ Type });
    }

    static toString() {
        return super.toString(this.Type);
    }

    init(state) {
        super.init();

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

        if (this.state !== nextState) {
            this.state = Type.assign(this.state, nextState);
            this.trigger();
        }

        return this;
    }

    trigger() {
        return Promise.resolve().then(() => super.trigger(this.state));
    }

    toString() {
        return super.toString(this.types.type);
    }
}
