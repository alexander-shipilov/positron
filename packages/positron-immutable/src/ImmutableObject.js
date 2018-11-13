import { forEach, map, SYMBOL_TYPES } from "positron-core";
import Immutable from "./Immutable";
import { assign, clone, getAncestorOf, isEqual, toJSON } from "./object";

function isChanged(next, current) {
  return Object.keys(next).length !== 0 || !isEqual(next, current);
}

export class ImmutableObject extends Immutable {
  static foo = new ImmutableObject();

  static assign(target, source) {
    if (source !== target && source != null && !(source instanceof this)) {
      source = target ? target.assign(source) : this.from(source);
    }

    return source;
  }

  static set(target, source) {
    if (source !== target && source != null && !(source instanceof this)) {
      source = target ? target.set(source) : this.from(source);
    }

    return source;
  }

  static of(nextTypes) {
    super.of(nextTypes);

    forEach(nextTypes, (type, name) => {
      const prop = "_" + name;

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

    return this;
  }

  constructor(...props) {
    super();

    if (props.length) {
      this.setProps(...props);
    }
  }

  assign(...props) {
    const ancestor = getAncestorOf(this);
    const next = clone(this).setProps(ancestor ? this : null, ...props);

    return isEqual(this, next) ? this : !ancestor || isChanged(next, ancestor) ? next : ancestor;
  }

  isEqual(target) {
    return this === target || (target instanceof this.constructor && isEqual(this, target));
  }

  set(props) {
    return this.assign(map(this.valueOf(), () => void 0), props);
  }

  setProps(...props) {
    return assign(this, ...props);
  }

  keys() {
    return Object.keys(this.valueOf());
  }

  valueOf() {
    const types = this.constructor[SYMBOL_TYPES];

    return Object.assign({}, getAncestorOf(this), this, types ? this.pick(Object.keys(types)) : null);
  }

  toJSON() {
    return map(this.valueOf(), toJSON);
  }
}
