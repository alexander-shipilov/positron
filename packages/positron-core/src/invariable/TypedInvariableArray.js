import { assign } from "../array";
import { of } from "../func";
import { valueOf } from "../object";
import { InvariableArray } from "./InvariableArray";
import { InvariableObject } from "./InvariableObject";


export class TypedInvariableArray extends of(InvariableArray, { Type: InvariableObject }) {
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
                const typedSource = assign([], valueOf(source)).map((value, index) => Type.assign(this[index], value));

                super.setProps(this, Object.assign(source, typedSource));
            }
        });

        return this;
    }
}
