import { assignToArray, of, valueOf } from "positron-core";
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
                const typedSource = assignToArray([], valueOf(source)).map((value, i) => Type.assign(this[i], value));

                super.setProps(this, Object.assign(source, typedSource));
            }
        });

        return this;
    }
}
