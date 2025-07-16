import type { SpecTests } from "@positron/spec";

import { expect, it } from "@jest/globals";
import { Spec } from "@positron/spec";

import type { List } from "./List";

import { ListNotFoundError } from "./ListNotFoundError";

export type ListSpecCreate = (items?: Iterable<number>) => List<number>;

/**
 * Class to test implementation of the {@link List} interface
 */
export class ListTests implements SpecTests<List<number>, ListSpecCreate> {
  @Spec.method()
  clear = (create: ListSpecCreate) => {
    it("should remove all values", () => {
      const list = create([1, 2]);

      list.clear();
      expect(list.size).toEqual(0);
      expect([...list]).toEqual([]);
    });
  };

  @Spec.method("item")
  delete = (create: ListSpecCreate) => {
    it("should delete the `item` from the list", () => {
      const list = create([1, 2, 3]);

      list.delete(1);
      expect([...list]).toEqual([2, 3]);
    });

    it("should return `true` if `item` was deleted and `false` otherwise", () => {
      const list = create([1, 2]);

      expect(list.delete(1)).toBe(true);
      expect(list.delete(1)).toBe(false);
    });
  };

  @Spec.method()
  entries = (create: ListSpecCreate) => {
    it("should return an iterable object of the pairs [index, item]", () => {
      const list = create([1, 2]);

      expect([...list.entries()]).toEqual([
        [0, 1],
        [1, 2],
      ]);
    });
  };

  @Spec.method("item")
  has = (create: ListSpecCreate) => {
    it("should return `true` if `item` exists in the list and `false` otherwise", () => {
      const list = create([1, 2]);

      expect(list.has(1)).toBe(true);
      expect(list.has(3)).toBe(false);
    });
  };

  @Spec.method("item")
  indexOf = (create: ListSpecCreate) => {
    it("should return an index of the given `item`", () => {
      const list = create([1, 2]);

      expect(list.indexOf(1)).toBe(0);
      expect(list.indexOf(2)).toBe(1);
    });

    it("should return `-1` if the given `item` does not exist in the list", () => {
      const list = create([1, 2]);

      expect(list.indexOf(3)).toBe(-1);
    });
  };

  @Spec.method("item", "refItem")
  insert = (create: ListSpecCreate) => {
    it("should append the given `item` to the end of the list if `refItem` is omitted", () => {
      const list = create();

      expect([...list.insert(1)]).toEqual([1]);
      expect([...list.insert(2)]).toEqual([1, 2]);
      expect([...list.insert(1)]).toEqual([2, 1]);
    });

    it("should insert the given `item` before the specified `refItem`", () => {
      const list = create([1]);

      expect([...list.insert(1)]).toEqual([1]);
      expect([...list.insert(2, 1)]).toEqual([2, 1]);
      expect([...list.insert(1, 2)]).toEqual([1, 2]);
      expect([...list.insert(3)]).toEqual([1, 2, 3]);
      expect([...list.insert(1, 3)]).toEqual([2, 1, 3]);
    });

    it("should return current instance", () => {
      const list = create();

      expect(list.insert(1)).toBe(list);
    });

    it("should throw `ListNotFoundError` if list does not contain `refItem`", () => {
      const list = create();

      expect(() => list.insert(1, 1)).toThrow(ListNotFoundError);
    });
  };

  @Spec.method("index")
  item = (create: ListSpecCreate) => {
    it("should return an item at the specified `index`", () => {
      const list = create([1, 2]);

      expect(list.item(0)).toBe(1);
      expect(list.item(1)).toBe(2);
    });

    it("should return `undefined` if there is no item at the specified `index`", () => {
      const list = create([]);

      expect(list.item(1)).toBeUndefined();
      expect(list.item(-1)).toBeUndefined();
      expect(list.item(NaN)).toBeUndefined();
      expect(list.item(1.1)).toBeUndefined();
    });
  };

  @Spec.method()
  keys = (create: ListSpecCreate) => {
    it("should return an iterable object to iterate over indexes", () => {
      const list = create([1, 2]);

      expect([...list.keys()]).toEqual([0, 1]);
    });
  };

  @Spec.method("item", "newItem")
  replace = (create: ListSpecCreate) => {
    it("should replace the given `item` by `newItem`", () => {
      const list = create([1, 2, 3]);

      expect([...list.replace(3, 3)]).toEqual([1, 2, 3]);
      expect([...list.replace(3, 4)]).toEqual([1, 2, 4]);
    });

    it("should remove existing occurrence of the `newItem`", () => {
      const list = create([1, 2, 3]);

      expect([...list.replace(2, 3)]).toEqual([1, 3]);
      expect([...list.replace(3, 1)]).toEqual([1]);
    });

    it("should return current instance", () => {
      const list = create([1]);

      expect(list.replace(1, 2)).toBe(list);
    });

    it("should throw `ListNotFoundError` if list does not contain `item`", () => {
      const list = create();

      expect(() => list.replace(1, 1)).toThrow(ListNotFoundError);
    });
  };

  size = () => {
    it("should return a size of list", () => {
      expect(create().size).toBe(0);
      expect(create([1]).size).toBe(1);
      expect(create([1, 2]).size).toBe(2);
    });
  };

  @Spec.method()
  [Symbol.iterator] = () => {
    it("should return iterator of items", () => {
      expect([...create([1, 2, 3])]).toEqual([1, 2, 3]);
    });
  };

  @Spec.method()
  values = () => {
    it("should return an iterable object to iterate over values", () => {
      const list = create([1, 2]);

      expect([...list.values()]).toEqual([1, 2]);
    });
  };

  constructor(public list: (items?: Iterable<number>) => List<number>) {}
}
