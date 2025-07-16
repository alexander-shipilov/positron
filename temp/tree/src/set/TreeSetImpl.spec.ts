import { describe, expect, it } from "@jest/globals";
import { TreeSetImpl } from "./TreeSetImpl";

describe(`${TreeSetImpl.name}`, () => {
  let set = new TreeSetImpl();

  const a = {};
  const b = {};
  const c = {};

  afterEach(() => {
    set = new TreeSetImpl();
  });

  describe(".constructor", () => {
    it("should create an empty array", () => {
      expect(set).toBeInstanceOf(Array);
      expect(set.length).toBe(0);
    });
  });

  describe(`#${set.indexOf.name}(item)`, () => {
    it("should return zero-base index of item", () => {
      expect(set.insert(a).indexOf(a)).toBe(0);
      expect(set.insert(b).indexOf(b)).toBe(1);
    });

    it("should return -1 id set does not contain an `item`", () => {
      expect(set.indexOf(a)).toBe(-1);
      expect(set.insert(a).indexOf(b)).toBe(-1);
    });
  });

  describe(`#${set.insert.name}(item, refItem)`, () => {
    it("should append an `item` if `refItem` is `null`", () => {
      expect([...set.insert(a)]).toEqual([a]);
      expect([...set.insert(b)]).toEqual([a, b]);
    });

    it("should insert an `item` before a `refItem`", () => {
      expect([...set.insert(a)]).toEqual([a]);
      expect([...set.insert(b, a)]).toEqual([b, a]);
      expect([...set.insert(c, a)]).toEqual([b, c, a]);
    });

    it("should do nothing if set already contains an `item`", () => {
      expect([...set.insert(a).insert(a)]).toEqual([a]);
    });

    it("should do nothing if set does not contain an `refItem`", () => {
      expect([...set.insert(a, b)]).toEqual([]);
    });

    it("should return same object", () => {
      expect(set.insert(a)).toBe(set);
      expect(set.insert(b)).toBe(set);
      expect(set.insert(c, a)).toBe(set);
    });
  });

  describe(`#${set.replace.name}(oldItem, newItem)`, () => {
    it("should replace the first occurrence of the `oldItem` by the `newItem`", () => {
      set.insert(a);

      expect([...set.replace(a, b)]).toEqual([b]);
      expect([...set.replace(b, b)]).toEqual([b]);
    });

    it("[1, 2, 3].replace(1, 3) --> [3, 2]", () => {
      set.insert(a).insert(b).insert(c);

      expect([...set.replace(a, c)]).toEqual([c, b]);
    });

    it("[3, 2, 1].replace(1, 3) --> [3, 2]", () => {
      set.insert(c).insert(b).insert(a);

      expect([...set.replace(a, c)]).toEqual([c, b]);
    });

    it("should do nothing if set does not contain `oldItem`", () => {
      set.insert(b).insert(a);

      expect([...set.replace(c, a)]).toEqual([b, a]);
    });
  });
});
