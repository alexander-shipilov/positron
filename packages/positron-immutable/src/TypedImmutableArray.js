import { SYMBOL_ALL, SYMBOL_TYPES, valueOf } from "positron-core";
import { assign } from "./array";
import { ImmutableArray } from "./ImmutableArray";

export class TypedImmutableArray extends ImmutableArray {
  static of(type) {
    return super.of({ [SYMBOL_ALL]: type });
  }

  setProps(...sources) {
    const type = this.constructor[SYMBOL_TYPES][SYMBOL_ALL];

    sources.forEach((source) => {
      if (source != null) {
        const immutable = assign([], valueOf(source)).map((value, i) => type.assign(this[i], value));

        super.setProps(this, Object.assign(source, immutable));
      }
    });

    return this;
  }
}
