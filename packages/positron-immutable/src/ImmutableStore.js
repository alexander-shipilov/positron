import { of } from "positron-core";
import { ImmutableObject } from "./ImmutableObject";
import { Store } from "positron-flow";

export class ImmutableStore extends of(Store, { Type: ImmutableObject }) {
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
        return super.toString(this.Type.name);
    }

    assignState(nextState) {
        const { state } = this;

        if (state !== nextState) {
            nextState = this.Type.assign(state, nextState);
        }

        return nextState;
    }

    toString() {
        return super.toString(this.Type.name);
    }
}
