import { Base } from "../Base";
import { empty } from "../func/empty";
import { assign, clone, filter, forEach, getAncestorOf, isDefined, isEqual, map, toJSON, valueOf } from "../object";

function isChanged(next, current) {
    return Object.keys(next).length !== 0 || !isEqual(next, current);
}

export class InvariableObject extends Base {
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

    static defineInvariableProperty(name, Type) {
        const prop = "_" + name;

        if (!InvariableObject.isImplementedBy(Type)) {
            throw new TypeError("Invalid type " + String(Type) + ". InvariableObject expected.");
        }

        this.define({ invariableProps: Object.assign({}, this.invariableProps, { [name]: Type }) });

        Object.defineProperty(this.prototype, name, {
            configurable: true,
            get() {
                return this[prop];
            },
            set(nextValue) {
                const currValue = this[prop];

                nextValue = Type.set(currValue, nextValue);
                if (currValue !== nextValue) {
                    this.define({ [prop]: nextValue });
                }
            }
        });

        return this;
    }

    static defineInvariableProperties(props) {
        forEach(props, (Type, prop) => {
            this.defineInvariableProperty(prop, Type);
        });

        return this;
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
        const next = clone(this);

        next.setProps(ancestor && this, ...props);

        return isEqual(this, next) ? this : !ancestor || isChanged(next, ancestor) ? next : ancestor;
    }

    set(props) {
        props = Object.assign(map(this.valueOf(), empty), valueOf(props));

        return this.assign(props);
    }

    isEqual(target) {
        return target instanceof this.constructor && isEqual(this, target);
    }

    toJSON() {
        return map(this.valueOf(), toJSON);
    }

    valueOf() {
        const { invariableProps } = this.constructor;
        const value = Object.assign({}, getAncestorOf(this), this,
            invariableProps && Object.keys(invariableProps).map((key) => this[key]));

        return filter(value, (value) => value !== void 0);
    }
}
