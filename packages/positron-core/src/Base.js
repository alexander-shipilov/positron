import { implement, isImplementationOf } from "./func";
import { map, pick, valueOf } from "./object";
import { warning } from "./console";

function toString(entity, name, ...mods) {
    return "[" + [entity, name, ...(mods.length ? ["<" + mods.join(", ") + ">"] : mods)].join(" ") + "]";
}

function define(target, props, writable) {
    return Object.defineProperties(target, map(props, (value) => ({ value, writable })));
}

/**
 * The root of all classes.
 * All prototype and static members of this class are inherited by all other classes.
 */
export class Base {
    static define(props, writable = true) {
        return define(this, props, writable);
    }

    static from(props) {
        return new this(props);
    }

    static getError(desc, Type = Error) {
        return new Type(String(this) + ": " + desc);
    }

    static implement(...mixins) {
        return implement(this, ...mixins);
    }

    static isImplementationOf(...classes) {
        return isImplementationOf(this, ...classes);
    }

    static isImplementedBy(value) {
        return isImplementationOf(value, this);
    }

    static toString(...mods) {
        return toString("class", this.name, ...mods);
    }

    static warning(message) {
        return warning(this + ": " + message);
    }

    constructor(...props) {
        if (props.length) {
            this.assign(...props);
        }
    }

    assign(...props) {
        return Object.assign(this, ...props.map(valueOf));
    }

    define(props, writable = true) {
        return define(this, props, writable);
    }

    getError(desc, Type = Error) {
        return new Type(String(this) + ": " + desc);
    }

    pick(props) {
        return pick(this, props);
    }

    toString(...mods) {
        return toString("object", this.constructor.name, ...mods);
    }

    valueOf() {
        return Object.assign({}, this);
    }

    warning(message) {
        return warning(this + ": " + message);
    }
}
