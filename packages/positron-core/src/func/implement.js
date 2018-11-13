// @flow

export interface IAggregation<T: Class<any>> {
    +name: string;
    +mixins: T[]
}

const PROPS_TO_SKIP = {
  apply: true,
  arguments: true,
  bind: true,
  call: true,
  caller: true,
  constructor: true,
  length: true,
  name: true,
  prototype: true,
  toString: true
};

function copyProps<T: Object, U: Object>(target: T, source: U): T | U {
  const propertyNames: $Keys<typeof source>[] = Object.getOwnPropertyNames(source);

  propertyNames.forEach((prop: $Keys<typeof source>) => {
    if (!PROPS_TO_SKIP.hasOwnProperty(prop)) {
      const descriptor = Object.getOwnPropertyDescriptor(source, prop);

      if (descriptor !== void 0) {
        Object.defineProperty(target, prop, descriptor);
      }
    }
  });

  Object.getOwnPropertySymbols(source).forEach((symbol) => {
    // $FlowFixMe
    target[symbol] = source[symbol];
  });

  return target;
}

function mix<T: Class<any>, U: Class<any>>(Aggregation: T, mixin: U) {
  copyProps(Aggregation.prototype, mixin.prototype);
  copyProps(Aggregation, mixin);
}

export function implement<T: Class<any>, U: Class<any>>(Target: T, ...mixins: U[]): T & U & IAggregation<U> {
  if (typeof Target !== "function") {
    throw new TypeError("function expected");
  }

  class Aggregation extends Target {
    static get name(): string {
      return Target.name;
    }

    static get mixins(): U[] {
      return (super.mixins || []).concat(mixins);
    }
  }

  mixins.forEach((mixin) => {
    if (typeof mixin !== "function") {
      throw new TypeError("function expected");
    }

    mix(Aggregation, mixin);
  });

  return Aggregation;
}
