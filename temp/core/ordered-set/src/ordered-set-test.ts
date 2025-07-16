import type { SpecTests } from "@positron/spec";

import { expect, it } from "@jest/globals";
import { Spec } from "@positron/spec";

import type { List } from "./List.js";
import type { OrderedSet } from "./ordered-set";

import { ListNotFoundError } from "./ListNotFoundError.js";

export type OrderedSetCreator = (
  items?: Iterable<unknown>,
) => OrderedSet<unknown>;

/**
 * Class to test implementation of the {@link List} interface
 */
export class OrderedSetTest implements SpecTests<OrderedSet<unknown>> {
  @Spec.method("item")
  add = () => {
    it("should add the `item` to the end of set", () => {});

    it("should remove all previous of `item` occurrences", () => {});

    it("should return a reference for the current object", () => {});
  };

  @Spec.method()
  clear = () => {
    it("should remove all values", () => {
      const set = this.set([1, 2]);

      set.clear();
      expect(set.size).toEqual(0);
      expect([...set]).toEqual([]);
    });

    it("should return `void`", () => {});
  };

  @Spec.method("item")
  delete = () => {
    it("should delete the `item` from the set", () => {
      const set = this.set([1, 2, 3]);

      set.delete(1);
      expect([...set]).toEqual([2, 3]);
    });

    it("should return `true` if `item` was deleted and `false` otherwise", () => {
      const set = this.set([1, 2]);

      expect(set.delete(1)).toBe(true);
      expect(set.delete(1)).toBe(false);
    });
  };

  @Spec.method()
  entries = () => {
    it("should return an iterable object of the pairs [index, item]", () => {
      const set = this.set([1, 2]);

      expect([...set.entries()]).toEqual([
        [0, 1],
        [1, 2],
      ]);
    });
  };

  forEach = () => {};

  @Spec.method("item")
  has = () => {
    it("should return `true` if `item` exists in the set and `false` otherwise", () => {
      const set = this.set([1, 2]);

      expect(set.has(1)).toBe(true);
      expect(set.has(3)).toBe(false);
    });
  };

  @Spec.method("item")
  indexOf = () => {
    it("should return an index of the given `item`", () => {
      const set = this.set([1, 2]);

      expect(set.indexOf(1)).toBe(0);
      expect(set.indexOf(2)).toBe(1);
    });

    it("should return `-1` if the given `item` does not exist in the set", () => {
      const set = this.set([1, 2]);

      expect(set.indexOf(3)).toBe(-1);
    });
  };

  @Spec.method("item", "refItem")
  insert = () => {
    it("should append the given `item` to the end of the set if `refItem` is omitted", () => {
      const set = this.set();

      expect([...set.insert(1)]).toEqual([1]);
      expect([...set.insert(2)]).toEqual([1, 2]);
      expect([...set.insert(1)]).toEqual([2, 1]);
    });

    it("should insert the given `item` before the specified `refItem`", () => {
      const set = this.set([1]);

      expect([...set.insert(1)]).toEqual([1]);
      expect([...set.insert(2, 1)]).toEqual([2, 1]);
      expect([...set.insert(1, 2)]).toEqual([1, 2]);
      expect([...set.insert(3)]).toEqual([1, 2, 3]);
      expect([...set.insert(1, 3)]).toEqual([2, 1, 3]);
    });

    it("should return current instance", () => {
      const set = this.set();

      expect(set.insert(1)).toBe(set);
    });

    it("should throw `ListNotFoundError` if set does not contain `refItem`", () => {
      const set = this.set();

      expect(() => set.insert(1, 1)).toThrow(ListNotFoundError);
    });
  };

  @Spec.method("index")
  item = () => {
    it("should return an item at the specified `index`", () => {
      const set = this.set([1, 2]);

      expect(set.item(0)).toBe(1);
      expect(set.item(1)).toBe(2);
    });

    it("should return `undefined` if there is no item at the specified `index`", () => {
      const set = this.set([]);

      expect(set.item(1)).toBeUndefined();
      expect(set.item(-1)).toBeUndefined();
      expect(set.item(NaN)).toBeUndefined();
      expect(set.item(1.1)).toBeUndefined();
    });
  };

  @Spec.method()
  keys = () => {
    it("should return an iterable object to iterate over indexes", () => {
      const set = this.set([1, 2]);

      expect([...set.keys()]).toEqual([0, 1]);
    });
  };

  @Spec.method("newItem", "oldItem")
  replace = () => {
    it("should replace the given `oldItem` by `newItem`", () => {
      const set = this.set([1, 2, 3]);

      set.replace(4, 3);
      expect([...set]).toEqual([1, 2, 4]);
    });

    it("should remove existing occurrence of the `newItem`", () => {
      const set = this.set([1, 2, 3]);

      set.replace(3, 2);
      expect([...set]).toEqual([1, 3]);
      expect([...set.replace(3, 1)]).toEqual([1]);
    });

    it("should return `true` if ", () => {
      const set = this.set([1]);

      expect(set.replace(1, 2)).toBe(set);
    });

    it("should throw `ListNotFoundError` if set does not contain `item`", () => {
      const set = this.set();

      expect(() => set.replace(1, 1)).toThrow(ListNotFoundError);
    });
  };

  size = () => {
    it("should return a size of set", () => {
      expect(this.set().size).toBe(0);
      expect(this.set([1]).size).toBe(1);
      expect(this.set([1, 2]).size).toBe(2);
    });
  };

  @Spec.method()
  [Symbol.iterator] = () => {
    it("should return iterator of items", () => {
      expect([...this.set([1, 2, 3])]).toEqual([1, 2, 3]);
    });
  };

  @Spec.method()
  values = () => {
    it("should return an iterable object to iterate over values", () => {
      const set = this.set([1, 2]);

      expect([...set.values()]).toEqual([1, 2]);
    });
  };

  constructor(protected set: (items?: Iterable<number>) => List<number>) {}
}
