import type { AnyObject } from "../object";

import type { PropertyKeyOf } from "./property-key-of";
import type { PropertySymbol } from "./property-symbol";

const isEnumerableProperty = (() => (target: unknown, key: PropertyKey) => {
  const object = {};

  return object.propertyIsEnumerable.call(target, key);
})();

/**
 * The {@link propertySymbols} function returns an array of enumerable
 * symbol properties found directly upon a given object.
 *
 * @remarks
 * If you need an array of all symbol properties (including non-enumerable
 * symbol properties), use `Object.getOwnPropertySymbols` instead.
 *
 * @example
 * ```ts
 *  const foo = Symbol("foo");
 *
 *  const object = {
 *    [foo]: "localSymbol"
 *  };
 *
 *  console.log(getOwnPropertySymbols(object));
 *  // [Symbol(foo)]
 * ```
 *
 * @param object - The object whose enumerable symbol properties are to be
 *   returned.
 *
 * @returns An array of enumerable symbol properties found directly upon the
 *   given object.
 *
 * @public
 */
export function propertySymbols<TValue extends AnyObject>(
  object: TValue,
): PropertyKeyOf<TValue, PropertySymbol>[] {
  return Object.getOwnPropertySymbols(object).filter((symbol) =>
    isEnumerableProperty(object, symbol),
  ) as PropertyKeyOf<TValue, symbol>[];
}
