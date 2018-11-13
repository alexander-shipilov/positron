import { Base, of, SYMBOL_ALL } from "positron-core";

class Immutable extends Base {
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

  isEqual(target) {
  }

  setProps(...props) {
  }

  assign(...props) {
  }

  set(props) {
  }

  toJSON() {
  }

  valueOf() {
  }
}

export default of(Immutable, { [SYMBOL_ALL]: Immutable });
