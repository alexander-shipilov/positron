import { assert, debug, template } from "@positron/lang";

import type { SpecName } from "./spec-name";
import type { SpecNamed } from "./spec-named";

const _items = Symbol("items");

/**
 * The {@link SpecNamedList} class represents a list containing unique named
 * items.
 *
 * @public
 */
export class SpecNamedList<TNamed extends SpecNamed> {
  /**
   * The map to store items.
   */
  private readonly [_items]: Map<SpecName, TNamed> = new Map();

  /**
   * The {@link SpecNamedList.items} property returns an iterable object for
   * iterating over the items of the `this` list.
   */
  public get items(): IterableIterator<TNamed> {
    return this[_items].values();
  }

  /**
   * The {@link SpecNamedList.append} method appends the passed `item` to the
   * end of `this` list.
   *
   * @param item - The item to be appended to `this` list.
   *
   * @returns The passed `item`.
   *
   * @throws {@link @positron/lang#AssertExeption} if `this` list already
   *   contains an item with the same name.
   */
  public append<TItem extends TNamed>(item: TItem): TItem {
    assert(!this[_items].has(item.name), () =>
      template`A parameter ${0} already in list.`(debug(item.name)),
    );

    this[_items].set(item.name, item);

    return item;
  }
}
