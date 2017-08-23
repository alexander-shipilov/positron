import { of } from "../func";
import { map, valueOf } from "../object";
import { InvariableObject } from "./InvariableObject";

export class TypedInvariableObject extends of(InvariableObject, { Type: InvariableObject }) {
    static get Type() {
        return this.types.Type;
    }

    get Type() {
        return this.constructor.Type;
    }

    static of(Type) {
        return super.of({ Type });
    }

    setProps(...sources) {
        const { Type } = this;

        sources.forEach((source) => {
            if (source !== void 0 && source !== null) {
                super.setProps(this, map(valueOf(source), (value, prop) => Type.assign(this[prop], value)));
            }
        });

        return this;
    }
}
