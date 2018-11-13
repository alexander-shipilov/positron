import { toKebabCase } from "positron-core";
import { block } from "./block";
import { element } from "./element";
import { modifiers } from "./modifiers";

export class BEMClassifier {
  static get className() {
    return toKebabCase(this.name);
  }

  static block(mods = null, ...other) {
    return block(this.className, mods, ...other);
  }

  static element(name, mods = null, ...other) {
    return element(this.className, name, mods, ...other);
  }

  static modifiers(mods) {
    return modifiers(this.className, mods);
  }

  get className() {
    return this.constructor.className;
  }

  block(mods = null, ...other) {
    return this.constructor.block(mods, ...other);
  }

  element(name, mods = null, ...other) {
    return this.constructor.element(name, mods, ...other);
  }

  modifiers(mods) {
    return this.constructor.modifiers(mods);
  }
}
