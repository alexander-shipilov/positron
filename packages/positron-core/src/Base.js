// @flow

import { warning } from "./console";
import { implement, isImplementationOf } from "./func";
import { map, pick, valueOf } from "./object";

export interface IStringLike {
    toString(): string
}

export type StringLike = string | IStringLike;

export interface BaseProps {
}

function toString(entity: StringLike, name: StringLike, ...mods: StringLike[]): string {
  return "[" + [entity, name, ...(mods.length ? ["<" + mods.join(", ") + ">"] : mods)].join(" ") + "]";
}

function define<T: any, P: BaseProps>(target: T, props: P, writable: boolean): T & P {
  return Object.defineProperties(target, map(props, (value) => ({ value, writable })));
}

/**
 * The root of all classes.
 */
export class Base<P: BaseProps> implements BaseProps {
  static define<T: BaseProps>(props: T, writable: boolean = true): Class<Base<P & T>> {
    return define(this, props, writable);
  }

  static from<T: BaseProps>(props: T): Base<any> {
    return new this(props);
  }

  static getError(desc: string, Type: Class<Error> = Error): Error {
    return new Type(String(this) + ": " + desc);
  }

  static implement<M: Class<any>>(...mixins: M[]): Class<Base<P>> & M {
    return implement(this, ...mixins);
  }

  static isImplementationOf(...classes: any[]): boolean {
    return isImplementationOf(this, ...classes);
  }

  static isImplementedBy(value: any): boolean {
    return isImplementationOf(value, this);
  }

  static toString(...mods: string[]): string {
    return toString("class", this.name, ...mods);
  }

  static warning(message: string) {
    warning(String(this) + ": " + message);
  }

  constructor<T: BaseProps>(...props: T[]) {
    if (props.length) {
      this.assign(...props);
    }
  }

  assign<T: BaseProps>(...props: T[]): Base<P & T> {
    return Object.assign(this, ...props.map(valueOf));
  }

  define<T: BaseProps>(props: T, writable: boolean = true): Base<P & T> {
    return define(this, props, writable);
  }

  getError(desc: string, Type: Class<Error> = Error): Error {
    return new Type(String(this) + ": " + desc);
  }

  pick(props: string[]): { [string]: any } {
    return pick(this, props);
  }

  toString(...mods: StringLike[]): string {
    return toString("object", this.constructor.name, ...mods);
  }

  valueOf(): P {
    // $FlowFixMe
    return Object.assign({}, this);
  }

  warning(message: string) {
    warning(String(this) + ": " + message);
  }
}
