import { map, SYMBOL_ALL, SYMBOL_TYPES } from "positron-core";
import { ImmutableObject } from "./ImmutableObject";
import { valueOf } from "./object";

export class TypedImmutableObject extends ImmutableObject {
  static of(type) {
    return super.of({ [SYMBOL_ALL]: type });
  }

  setProps(...sources) {
    const type = this.constructor[SYMBOL_TYPES][SYMBOL_ALL];

    sources.forEach((source) => {
      if (source != null) {
        super.setProps(this, map(valueOf(source), (value, prop) => type.assign(this[prop], value)));
      }
    });

    return this;
  }
}
