import { toJSON, valueOf } from "positron-core";
import { assign, defineLength, isEqual } from "./array";
import { ImmutableObject } from "./ImmutableObject";
import { clone, getAncestorOf } from "./object";

const {
    concat,
    every,
    fill,
    filter,
    find,
    findIndex,
    forEach,
    indexOf,
    join,
    lastIndexOf,
    map,
    push,
    reduce,
    reduceRight,
    reverse,
    slice,
    splice,
    some,
    sort,
    shift,
    unshift
} = Array.prototype;


function isChanged(next, current) {
    return next.length !== current.length || Object.keys(next).length !== 0;
}

export class ImmutableArray extends ImmutableObject {
    static from(data) {
        return new this().setProps(Array.from(data));
    }

    constructor(...items) {
        items = new Array(...items);

        super();
        defineLength(this, 0);
        this.setProps(items, { length: items.length });
    }

    setProps(...props) {
        return assign(this, ...props);
    }

    assign(...props) {
        const ancestor = getAncestorOf(this);
        const next = clone(this).setProps(ancestor && this, ...props);

        return isEqual(this, next) ? this : !ancestor || isChanged(next, ancestor) ? next : ancestor;
    }

    isEqual(target) {
        return this === target || (target instanceof this.constructor && isEqual(this, target));
    }

    concat(...args) {
        const next = concat.apply(new Array(this.length), args.map(valueOf));

        return this.length === next.length ? this : this.assign(next, { length: next.length });
    }

    fill(value, start, end) {
        return this.assign(fill.call(Object.create(this), value, start, end));
    }

    filter(cb, thisArg) {
        const next = filter.call(this, cb, thisArg);

        return this.length === next.length ? this : this.assign(next, { length: next.length });
    }

    pop() {
        return this.length ? this.assign({ length: this.length - 1 }) : this;
    }

    push(...items) {
        let next;

        if (items.length) {
            push.apply(next = new Array(this.length), items);

            next = this.assign(next);
        }

        return next || this;
    }

    reverse() {
        return this.assign(reverse.call(Object.create(this)));
    }

    shift() {
        let next;

        if (this.length) {
            shift.call(next = Object.create(this));

            next = this.assign(next, { length: next.length });
        }

        return next || this;
    }

    slice(start, end) {
        const next = slice.call(this, start, end);

        return this.length === next.length ? this : this.assign(next, { length: next.length });
    }

    sort(compareFn) {
        return this.assign(sort.call(Object.create(this), compareFn));
    }

    splice(start, deleteCount, ...items) {
        let next;

        if (this.length) {
            splice.call(next = Object.create(this), start, deleteCount, ...items);

            next = this.assign(next, { length: next.length });
        }

        return next || this;
    }

    unshift(...items) {
        let next;

        if (items.length) {
            unshift.apply(next = Object.create(this), items);

            next = this.assign(next);
        }

        return next || this;
    }

    toJSON() {
        return this.valueOf().map(toJSON);
    }

    toString() {
        return String(this.valueOf());
    }

    valueOf() {
        const { types } = this.constructor;

        return Object.assign(Array.from(this), types ? this.pick(Object.keys(types)) : null);
    }
}

Object.assign(ImmutableArray.prototype, {
    every,
    find,
    findIndex,
    forEach,
    indexOf,
    join,
    lastIndexOf,
    map,
    reduce,
    reduceRight,
    some
});
