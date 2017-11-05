import { Base, empty, forEach, isDefined, map, toJSON, valueOf } from "positron-core";
import { assign, clone, getAncestorOf, isEqual } from "./object";

function isChanged(next, current) {
    return Object.keys(next).length !== 0 || !isEqual(next, current);
}

export class ImmutableObject extends Base {
    static assign(target, source) {
        if (source !== target && isDefined(source) && !(source instanceof this)) {
            source = target ? target.assign(source) : this.from(source);
        }

        return source;
    }

    static set(target, source) {
        if (source !== target && isDefined(source) && !(source instanceof this)) {
            source = target ? target.set(source) : this.from(source);
        }

        return source;
    }

    static of(types) {
        forEach(types, (type, name) => {
            const prop = "_" + name;

            if (!ImmutableObject.isImplementedBy(type)) {
                throw new TypeError("Invalid type " + String(type) + ". ImmutableObject expected.");
            }

            Object.defineProperty(this.prototype, name, {
                configurable: true,
                get() {
                    return this[prop];
                },
                set(nextValue) {
                    const currValue = this[prop];

                    nextValue = type.set(currValue, nextValue);
                    if (currValue !== nextValue) {
                        this.define({ [prop]: nextValue });
                    }
                }
            });
        });

        return this.define({ types: Object.assign({}, this.types, types) });
    }

    constructor(...props) {
        super();

        if (props.length) {
            this.setProps(...props);
        }
    }

    setProps(...props) {
        return assign(this, ...props);
    }

    assign(...props) {
        const ancestor = getAncestorOf(this);
        const next = clone(this).setProps(ancestor && this, ...props);

        return isEqual(this, next) ? this : !ancestor || isChanged(next, ancestor) ? next : ancestor;
    }

    set(props) {
        return this.assign(Object.assign(map(this.valueOf(), empty), valueOf(props)));
    }

    isEqual(target) {
        return target instanceof this.constructor && isEqual(this, target);
    }

    toJSON() {
        return map(this.valueOf(), toJSON);
    }

    keys() {
        return Object.keys(this.valueOf());
    }

    valueOf() {
        const { types } = this.constructor;

        return Object.assign({}, getAncestorOf(this), this, types ? this.pick(Object.keys(types)) : null);
    }
}
