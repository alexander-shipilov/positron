import { map, of, valueOf } from "positron-core";
import { ImmutableObject } from "./ImmutableObject";

export class TypedImmutableObject extends of(ImmutableObject, { Type: ImmutableObject }) {
    static get Type() {
        return this.types.Type;
    }

    static of(Type) {
        return super.of({ Type });
    }

    setProps(...sources) {
        const { Type } = this.constructor;

        sources.forEach((source) => {
            if (source !== void 0 && source !== null) {
                super.setProps(this, map(valueOf(source), (value, prop) => Type.assign(this[prop], value)));
            }
        });

        return this;
    }
}
