import { List } from "./List";

/**
 * Some [lists] are designated as [ordered sets]. An [ordered set] is a [list]
 * with the additional semantic that it must not contain the same [item] twice.
 */
export class OrderedSet<TItem> extends List<TItem> {
  protected indexes = new Map<TItem, number>();

  /**
   * https://infra.spec.whatwg.org/#set-append
   *
   * To [append] to an [ordered set]: if the set [contains] the given item, then
   * do nothing; otherwise, perform the normal [list] [append] operation.
   */
  append(item: TItem) {
    if (!this.contains(item)) {
      super.append(item);
      this.updateIndexes(this.size - 1);
    }
  }

  /**
   * @override
   */
  contains(item: TItem): boolean {
    return this.indexes.has(item);
  }

  /**
   * @override
   */
  empty() {
    super.empty();
    this.indexes = new Map<TItem, number>();
  }

  /**
   * https://infra.spec.whatwg.org/#set-prepend
   *
   *  To [prepend] to an [ordered set]: if the set contains the given `item`,
   *  then do nothing; otherwise, perform the normal [list] [prepend] operation.
   */
  prepend(item: TItem) {
    if (!this.contains(item)) {
      super.prepend(item);
      this.updateIndexes(0);
    }
  }

  /**
   * @override
   */
  remove(condition: (item: TItem) => boolean) {
    this.items = this.items.filter((item) => {
      const match = condition(item);

      if (match) {
        this.indexes.delete(item);
      }

      return match;
    });
  }

  /**
   * https://infra.spec.whatwg.org/#set-replace
   *
   * To replace within an [ordered set] set, given item and replacement: if set
   * contains `item` or `replacement`, then replace the first instance of either
   * with replacement and remove all other instances.
   *
   */
  replace(condition: (item: TItem) => boolean, replacement: TItem) {
    super.replace(condition, replacement);

    this.items = [...new Set(this.items)];
    this.updateIndexes(0);
  }

  /**
   * Updates indexes from `startIndex` (inclusive) to `endIndex` (exclusive)
   *
   * @param startIndex - Start index
   * @param endIndex - End index
   */
  protected updateIndexes(
    startIndex: number,
    endIndex: number = this.size
  ): this {
    const { indexes } = this;

    for (let i = startIndex; i < endIndex; i += 1) {
      indexes.set(this.items[i], i);
    }

    return this;
  }
}
