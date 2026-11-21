import type { KeyOf } from "./key-of";

const isEnumerableProperty = (() => {
  const object = {};

  return (target: unknown, key: PropertyKey) =>
    object.propertyIsEnumerable.call(target, key);
})();

/**
 * The {@link getOwnSymbolKeys} function returns an array of enumerable symbol
 * properties found directly upon the given `object`.
 *
 * @remarks
 *   If you need an array of all symbol properties (including non-enumerable
 *   symbol properties), use `Object.getOwnPropertySymbols` instead.
 *
 * @example
 * ```ts
 * import { getOwnSymbolKeys } from "@positron/lang";
 *
 * const foo = Symbol("foo");
 *
 * const object = {
 *   [foo]: "localSymbol",
 * };
 *
 * console.log(getOwnSymbolKeys(object));
 * // >> [Symbol(foo)]
 * ```
 *
 * @param object - The object whose enumerable symbol properties are to be
 *   returned.
 *
 * @returns An array of enumerable symbol properties found directly upon
 *   `object`.
 *
 * @public
 */
export function getOwnSymbolKeys<TValue extends object>(
  object: TValue,
): KeyOf<TValue, symbol>[] {
  return Object.getOwnPropertySymbols(object).filter((symbol) =>
    isEnumerableProperty(object, symbol),
  ) as KeyOf<TValue, symbol>[];
}
