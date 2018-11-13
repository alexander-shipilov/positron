// @flow

import { getName } from "./getName";
import { implement } from "./implement";
import { isImplementationOf } from "./isImplementationOf";

export type Type = Class<any>;

export type Types = { [string | Symbol]: Type };

export interface ITyped<C: Class<any>, T: Types> {
    SYMBOL_TYPES: Symbol;
    SYMBOL_ALL: Symbol;

    of<U: Types>(types: U): C & ITyped<C, T & U>;
}


export const SYMBOL_TYPES = Symbol("Typed.types");

export const SYMBOL_ALL = Symbol("Typed.all");

function isValidType(key: string | Symbol, type: Type, expected: Type): boolean {
  const isValid = typeof(type) === "function" && (!expected || isImplementationOf(type, expected));

  if (!isValid) {
    throw new Error(`Expected type \`${ String(key) }\` to be ${ expected ? getName(expected) : "a class" }`);
  }

  return isValid;
}

function isValidTypes(types: Types, expected: Types): boolean {
  const keys = Object.keys(types);

  if (types.hasOwnProperty(SYMBOL_ALL)) {
    keys.unshift(SYMBOL_ALL);
  }

  return keys.every((key) => isValidType(key, types[key], expected[key] || expected[SYMBOL_ALL]));
}

export class Typed {
    static SYMBOL_TYPES = SYMBOL_TYPES;

    static SYMBOL_ALL = SYMBOL_ALL;

    // $FlowFixMe
    static [SYMBOL_TYPES]: T = {};

    static of(nextTypes: Types) {
      // $FlowFixMe
      const { [SYMBOL_TYPES]: currTypes } = this;

      if (isValidTypes(nextTypes, currTypes)) {
        // $FlowFixMe
        this[SYMBOL_TYPES] = { ...currTypes, ...nextTypes };
      }

      return this;
    }
}

export function of<T: Class<any>, U: Types>(Class: T, types: U): T & ITyped<T, U> {
  const Super: T & ITyped<T, any> = isImplementationOf(Class, Typed) ? Class : implement(Class, Typed);

  class TypedClass extends Super {
    static get name() {
      return Class.name;
    }
  }

  return TypedClass.of(types);
}
