import { assign, defineLength, isEqual } from "./array";
import { ImmutableObject } from "./ImmutableObject";
import { clone, getAncestorOf, toJSON, valueOf } from "./object";

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

  isEqual(target) {
    return this === target || (target instanceof this.constructor && isEqual(this, target));
  }

  assign(...props) {
    const ancestor = getAncestorOf(this);
    const next = clone(this).setProps(ancestor ? this : null, ...props);

    return isEqual(this, next) ? this : !ancestor || isChanged(next, ancestor) ? next : ancestor;
  }

  set(props) {
    return this.assign({ length: 0 }, props);
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
    let next = this;

    if (this.length) {
      shift.call(next = Object.create(this));

      next = this.assign(next, { length: next.length });
    }

    return next;
  }

  slice(start, end) {
    const next = slice.call(this, start, end);

    return this.length === next.length ? this : this.assign(next, { length: next.length });
  }

  sort(compareFn) {
    return this.assign(sort.call(Object.create(this), compareFn));
  }

  splice(start, deleteCount, ...items) {
    let next = this;

    if (this.length) {
      next = Object.create(this);
      splice.call(next, start, deleteCount, ...items);

      next = this.assign(next, { length: next.length });
    }

    return next;
  }

  unshift(...items) {
    let next;

    if (items.length) {
      unshift.apply(next = Object.create(this), items);

      next = this.assign(next);
    }

    return next || this;
  }

  valueOf() {
    const { types } = this.constructor;

    return Object.assign(Array.from(this), types ? this.pick(Object.keys(types)) : null);
  }

  toJSON() {
    return this.valueOf().map(toJSON);
  }

  toString() {
    return String(this.valueOf());
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
