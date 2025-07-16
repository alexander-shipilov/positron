import { describe, expect, it } from "@jest/globals";
import { isIterableIterator } from "@positron/lang";
import type { TreeCollection } from "./types";

/**
 * Specification of {@link TreeCollection} interface
 * Use this class to test implementation of {@link TreeCollection}
 *
 * @example
 * ```
 *  describe('MyTreeCollection', () => {
 *    const collection = new MyTreeCollection()
 *    const collectionSpec = new TreeCollectionSpec()
 *
 *    collectionSpec.describe(collection)
 *  })
 * ```
 */
export class TreeCollectionSpec {
  /**
   * Describes {@link TreeCollection} interface
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describe(collection: TreeCollection, displayName = "collection") {
    describe(`${displayName}: TreeCollection`, () => {
      // ArrayLikeSpec.describe(collection, displayName);

      TreeCollectionSpec.describeIterator(collection, displayName);
      TreeCollectionSpec.describeEntries(collection, displayName);
      TreeCollectionSpec.describeKeys(collection, displayName);
      TreeCollectionSpec.describeValues(collection, displayName);
      TreeCollectionSpec.describeItem(collection, displayName);
      TreeCollectionSpec.describeForEach(collection, displayName);
    });
  }

  /**
   * Describes {@link TreeCollection#iterator} method
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describeIterator(
    collection: TreeCollection,
    displayName = "collection",
  ) {
    describe(`${displayName}[Symbol.iterator]()`, () => {
      it("should return an iterator to iterate over `collection` items", () => {
        expect([...collection[Symbol.iterator]()]).toEqual([
          ...Array.from(collection).values(),
        ]);
      });

      it("should return the same result as `collection.values()`", () => {
        expect([...collection[Symbol.iterator]()]).toEqual([
          ...collection.values(),
        ]);
      });

      it("should return an `IterableIterator` object", () => {
        expect(isIterableIterator(collection[Symbol.iterator]())).toBe(true);
        expect(() => [...collection[Symbol.iterator]()]).not.toThrow();
      });

      it("should return a new iterator each time called", () => {
        expect(collection[Symbol.iterator]()).not.toBe(
          collection[Symbol.iterator](),
        );
      });
    });
  }

  /**
   * Describes {@link TreeCollection#entries} method
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describeEntries(
    collection: TreeCollection,
    displayName = "collection",
  ) {
    describe(`${displayName}.entries()`, () => {
      it("should return an iterator to iterate over `collection` entries: `[index, item]`", () => {
        expect([...collection.entries()]).toEqual([
          ...Array.from(collection).entries(),
        ]);
      });

      it("should return an `IterableIterator` object", () => {
        expect(isIterableIterator(collection.entries())).toBe(true);
        expect(() => [...collection.entries()]).not.toThrow();
      });

      it("should return a new iterator each time called", () => {
        expect(collection.entries()).not.toBe(collection.entries());
      });
    });
  }

  /**
   * Describes {@link TreeCollection#keys} method
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describeKeys(collection: TreeCollection, displayName = "collection") {
    describe(`${displayName}.keys()`, () => {
      it("should return an iterator to iterate over `collection` indexes", () => {
        expect([...collection.keys()]).toEqual([
          ...Array.from(collection).keys(),
        ]);
      });

      it("should return an `IterableIterator` object", () => {
        expect(isIterableIterator(collection.keys())).toBe(true);
        expect(() => [...collection.keys()]).not.toThrow();
      });

      it("should return a new iterator each time called", () => {
        expect(collection.keys()).not.toBe(collection.keys());
      });
    });
  }

  /**
   * Describes {@link TreeCollection#values} method
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describeValues(
    collection: TreeCollection,
    displayName = "collection",
  ) {
    describe(`${displayName}.values()`, () => {
      it("should return an iterator to iterate over `collection` items", () => {
        expect([...collection.values()]).toEqual([
          ...Array.from(collection).values(),
        ]);
      });

      it("should return an `IterableIterator` object", () => {
        expect(isIterableIterator(collection.values())).toBe(true);
        expect(() => [...collection.keys()]).not.toThrow();
      });

      it("should return a new iterator each time called", () => {
        expect(collection.values()).not.toBe(collection.values());
      });
    });
  }

  /**
   * Describes {@link TreeCollection#item} method
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describeItem(collection: TreeCollection, displayName = "collection") {
    describe(`${displayName}.item(index)`, () => {
      it("should return an item at `index`th position", () => {
        expect(
          [...collection.keys()].map((index) => collection.item(index)),
        ).toEqual([...collection]);
      });

      it("should return `null` if `index` is out of range", () => {
        expect(collection.item(collection.length)).toBe(null);
        expect(collection.item(1.1)).toBe(null);
        expect(collection.item(-1)).toBe(null);
        expect(collection.item(NaN)).toBe(null);
      });
    });
  }

  /**
   * Describes {@link TreeCollection#forEach} method
   *
   * @param collection - Collection
   * @param displayName - Collection display name
   */
  static describeForEach(
    collection: TreeCollection,
    displayName = "collection",
  ) {
    describe(`${displayName}.forEach(callback, thisArg)`, () => {
      const callback = jest.fn();
      const that = {};

      collection.forEach(callback, that);

      it(`${displayName} should not be empty`, () => {
        expect(collection.length).toBeGreaterThan(0);
      });

      it(`\`callback\` should be called for each item in \`${displayName}\``, () => {
        expect(callback).toHaveBeenCalledTimes(collection.length);
      });

      it.each([...callback.mock.calls.entries()])(
        `%#: with args: ${displayName}[%#], %#, ${displayName}`,
        (index, args) => {
          expect(args).toEqual([collection[index], index, collection]);
        },
      );

      it.each([...callback.mock.contexts.entries()])(
        "#i: with the passed `thisArg`",
        (index, context) => {
          expect(context).toBe(that);
        },
      );
    });
  }
}
