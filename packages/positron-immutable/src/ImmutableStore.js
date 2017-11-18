import { of } from "positron-core";
import { ImmutableObject } from "./ImmutableObject";
import { Store } from "positron-flow";

export class ImmutableStore extends of(Store, { Type: ImmutableObject }) {
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

    setState(nextState) {
        const { state } = this;

        if (nextState !== state) {
            nextState = this.Type.assign(state, nextState);

            if (nextState !== state) {
                this.state = nextState;
            }
        }

        return this.state === state ? Promise.resolve(this.state) : this.trigger();
    }

    toString() {
        return super.toString(this.Type.name);
    }
}
