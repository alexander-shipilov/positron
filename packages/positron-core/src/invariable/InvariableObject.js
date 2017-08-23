import { Base } from "../Base";
import { assign, clone, forEach, getAncestorOf, isEqual, map, pick, toJSON } from "../object";

function isChanged(next, current) {
    return Object.keys(next).length !== 0 || !isEqual(next, current);
}

export class InvariableObject extends Base {
    static assign(target, source) {
        if (source !== null && source !== void 0 && source !== target && !(source instanceof this)) {
            source = target ? target.assign(source) : this.from(source);
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

                nextValue = Type.assign(currValue, nextValue);
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

    static getInvariableProperties(target) {
        const { invariableProps } = this;

        return target && invariableProps ? pick(target, ...Object.keys(invariableProps)) : void 0;
    }

    init(...props) {
        this.setProps(...props);
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

    isEqual(target) {
        return target instanceof this.constructor && isEqual(this, target);
    }

    reset() {
        return getAncestorOf(this) || this;
    }

    toJSON() {
        return map(this.valueOf(), toJSON);
    }

    valueOf() {
        return Object.assign({}, getAncestorOf(this), this, this.constructor.getInvariableProperties(this));
    }
}
