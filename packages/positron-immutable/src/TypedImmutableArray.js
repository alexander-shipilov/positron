import { of, valueOf } from "positron-core";
import { assign } from "./array";
import { ImmutableArray } from "./ImmutableArray";
import { ImmutableObject } from "./ImmutableObject";


export class TypedImmutableArray extends of(ImmutableArray, { Type: ImmutableObject }) {
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
                const typedSource = assign([], valueOf(source)).map((value, index) => Type.assign(this[index], value));

                super.setProps(this, Object.assign(source, typedSource));
            }
        });

        return this;
    }
}
