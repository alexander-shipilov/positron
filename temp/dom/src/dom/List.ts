/**
 * A [list] is a specification type consisting of a finite ordered sequence of
 * [items].
 */
export class List<TItem> {
  protected items: TItem[] = [];

  /**
   * https://infra.spec.whatwg.org/#list-size
   *
   * A [list]’s [size] is the number of [items] the list contains.
   */
  get size(): number {
    return this.items.length;
  }

  /**
   * Iterator
   */
  [Symbol.iterator](): IterableIterator<TItem> {
    return this.items[Symbol.iterator]();
  }

  /**
   * https://infra.spec.whatwg.org/#list-append
   *
   * To [append] to a [list] that is not an ordered set is to add the given
   * `item` to the end of the list.
   */
  append(item: TItem): void {
    this.items.push(item);
  }

  /**
   * https://infra.spec.whatwg.org/#list-clone
   *
   * To clone a [list] list is to create a new [list] clone, of the same
   * designation, and, for each item of list, append item to clone, so that
   * clone contains the same [items], in the same order as [list].
   */
  clone(): List<TItem> {
    const copy = new List<TItem>();

    copy.extend(this);

    return copy;
  }

  /**
   * https://infra.spec.whatwg.org/#list-contain
   *
   * A [list] [contains] an `item` if it appears in the [list].
   */
  contains(item: TItem): boolean {
    return this.items.includes(item);
  }

  /**
   * https://infra.spec.whatwg.org/#list-empty
   *
   * To [empty] a [list] is to remove all of its [items].
   */
  empty(): void {
    this.items = [];
  }

  /**
   * https://infra.spec.whatwg.org/#list-extend
   *
   * To extend a [list] A with a [list] B, for each [item] of B, [append]
   * item to A.
   */
  extend(list: List<TItem>): void {
    list.forEach((item) => this.append(item));
  }

  /**
   * https://infra.spec.whatwg.org/#list-iterate
   *
   * To iterate over a [list], performing a set of steps on each [item] in
   * order, use phrasing of the form "For each item of list", and then operate
   * on item in the subsequent prose.
   */
  forEach(callback: (item: TItem) => void): void {
    this.items.forEach(callback);
  }

  /**
   * https://infra.spec.whatwg.org/#list-get-the-indices
   *
   * To [get the indices] of a [list], return the range from 0 to the [list]’s
   * [size], exclusive.
   */
  getIndices(): number[] {
    return [...this.items.keys()];
  }

  /**
   * https://infra.spec.whatwg.org/#list-insert
   *
   * To insert an `item` into a list before an `index` is to add the given
   * `item` to the list between the given `index` − 1 and the given `index`.
   * If the given `index` is 0, then [prepend] the given item to the list.
   */
  insert(item: TItem, index: number): void {
    this.items.splice(index, 0, item);
  }

  /**
   * https://infra.spec.whatwg.org/#list-is-empty
   *
   * A [list] [is empty] if its [size] is zero.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * https://infra.spec.whatwg.org/#list-prepend
   *
   * To prepend to a [list] that is not an [ordered set] is to add the given
   * `item` to the beginning of the list.
   */
  prepend(item: TItem): void {
    this.items.unshift(item);
  }

  /**
   * https://infra.spec.whatwg.org/#list-remove
   *
   * To remove zero or more [items] from a [list] is to remove all [items] from
   * the [list] that match a given `condition`, or do nothing if none do.
   */
  remove(condition: (item: TItem) => boolean): void {
    this.items = this.items.filter((item) => !condition(item));
  }

  /**
   * https://infra.spec.whatwg.org/#list-replace
   *
   * To replace within a [list] that is not an [ordered set] is to replace all
   * [items] from the [list] that match a given `condition` with the given
   * `item`, or do nothing if none do.
   */
  replace(condition: (item: TItem) => boolean, item: TItem): void {
    this.items.forEach((currItem, index, items) => {
      if (condition(currItem)) {
        items.splice(index, 1, item);
      }
    });
  }
}
