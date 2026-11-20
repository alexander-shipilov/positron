import type { Nullish } from "@positron/lang";
import { assert, error } from "@positron/lang";

import { isUnitIdentifier } from "./is-unit-identifier";

/**
 * The {@link UnitSet} class represents a case-insensitive dictionary.
 *
 * @public
 */
export class UnitSet<TItem extends string> implements Iterable<TItem> {
  readonly #units: ReadonlySet<TItem>;

  /**
   * The {@link UnitSet} constructor creates a new instance of {@link UnitSet}.
   *
   * @param units - The iterable object of dictionary units.
   *
   * @throws `TypeError` if `units` contain empty or non-lowercase strings.
   */
  public constructor(units: Iterable<TItem>) {
    this.#units = new Set(
      assert(
        [...units],
        (items) => items.every(isUnitIdentifier),
        () => error("Unit must be non-empty lowercase string.", TypeError),
      ),
    );
  }

  /**
   * The {@link UnitSet.has} type-guard method determines whether the
   * passed `item` is an item of this dictionary.
   *
   * @example
   * ```ts
   *  const freq = new CssDictionary(["hz", "khz"]);
   *
   *  console.log(freq.is("hz"));
   *  // >> true
   *
   *  console.log(freq.is("kHz"));
   *  // >> false
   * ```
   *
   * @param item - The value to be searched among items of this dictionary.
   *
   * @returns `true` if `item` is found.
   */
  public has(item: string): item is TItem {
    return (this.#units as ReadonlySet<string>).has(item);
  }

  /**
   * The {@link UnitSet.match} method determines whether the passed
   * `value` is dictionary value.
   *
   * @remarks
   *   The {@link UnitSet.match} method converts the given `value` to
   *   lowercase and performs a search.
   *
   * @example
   * ```ts
   *  const freq = new CssDictionary(["hz", "khz"]);
   *
   *  console.log(freq.match("hz"));
   *  // >> true
   *
   *  console.log(freq.match("Hz"));
   *  // >> true
   *
   *  console.log(freq.match("kHz"));
   *  // >> true
   *
   *  console.log(freq.match("turn"));
   *  // >> false
   * ```
   *
   * @param value - The value to be searched among items of this dictionary.
   *
   * @returns `true` if `value` is found.
   */
  public match(value: string): boolean {
    return this.has(value.toLowerCase());
  }

  /**
   * The `UnitSet[Symbol.iterator]` method returns an iterator to iterate
   * dictionary items.
   */
  public [Symbol.iterator](): IterableIterator<TItem> {
    return this.#units[Symbol.iterator]();
  }

  /**
   * The {@link UnitSet.toUnit} method converts the given `value` to unit
   * if it is possible.
   *
   * @example
   * ```ts
   *  const freq = new CssDictionary(["hz", "khz"]);
   *
   *  console.log(freq.item("Hz"));
   *  // >> "hz"
   *
   *  console.log(freq.item("turn"));
   *  // throws "Invalid unit: turn"
   * ```
   *
   * @param value - The value to be converted to this dictionary item.
   *
   * @returns This set unit or `null` if `value` cannot be converted.
   */
  public toUnit(value: string): Nullish<TItem> {
    return this.get(value) ?? this.get(value.toLowerCase());
  }

  /**
   * The {@link UnitSet.get} method returns a dictionary item or
   * `null` if item not found among dictionary items.
   *
   * @param itemLike - Item to be returned.
   *
   * @returns This dictionary item or `null`.
   */
  protected get(itemLike: string): Nullish<TItem> {
    return this.has(itemLike) ? itemLike : null;
  }
}
