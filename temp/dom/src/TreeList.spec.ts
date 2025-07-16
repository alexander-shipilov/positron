import { TreeException } from "./TreeException";
import { TreeList } from "./TreeList";

describe(`${TreeList.name}`, () => {
  let list = new TreeList<object>();

  const val1 = {};
  const val2 = {};
  const val3 = {};

  afterEach(() => {
    list = new TreeList<object>();
  });

  describe(".constructor()", () => {
    it("should create a new empty instance of `TreeList`", () => {
      expectType(list).toBeInstanceOf(TreeList);
      expectType([...list]).toEqual([]);
    });
  });

  describe(`#${list.item.name}(index)`, () => {
    it("should return the item be specified index", () => {
      expectType(list.insertItem(val1).item(0)).toBe(val1);
      expectType(list.insertItem(val2).item(0)).toBe(val1);
    });

    it("should return `null` if index is out of range", () => {
      expectType(list.item(0)).toBe(null);
      expectType(list.item(1.1)).toBe(null);
      expectType(list.insertItem(val1).item(1)).toBe(null);
    });
  });

  describe(`#${list.firstItem.name}()`, () => {
    it("should return the first item", () => {
      expectType(list.insertItem(val1).firstItem()).toBe(val1);
      expectType(list.insertItem(val2).firstItem()).toBe(val1);
    });

    it("should return `null` if list is empty", () => {
      expectType(list.firstItem()).toBe(null);
    });
  });

  describe(`#${list.lastItem.name}()`, () => {
    it("should return the last item", () => {
      expectType(list.insertItem(val1).lastItem()).toBe(val1);
      expectType(list.insertItem(val2).lastItem()).toBe(val2);
    });

    it("should return `null` if list is empty", () => {
      expectType(list.lastItem()).toEqual(null);
      expectType(list.insertItem(val1).removeAll().lastItem()).toEqual(null);
    });
  });

  describe(`#${list.insertItem.name}(item)`, () => {
    it("should return the same instance of `TreeList`", () => {
      expectType(list.insertItem(val1)).toBe(list);
    });

    it("should insert an item at the end of list", () => {
      expectType([...list.insertItem(val1)]).toEqual([val1]);
      expectType([...list.insertItem(val1)]).toEqual([val1, val1]);
      expectType([...list.insertItem(val2)]).toEqual([val1, val1, val2]);
      expectType([...list.insertItem(val1)]).toEqual([val1, val1, val2, val1]);
    });
  });

  describe(`#${list.removeItem.name}(item)`, () => {
    it("should return the same instance of `TreeList`", () => {
      expectType(list.insertItem(val1).removeItem(val1)).toBe(list);
    });

    it("should remove all occurrences of `item`", () => {
      list.insertItem(val1);
      expectType([...list.removeItem(val1)]).toEqual([]);

      list.insertItem(val1).insertItem(val2);
      expectType([...list.removeItem(val1)]).toEqual([val2]);

      list.insertItem(val1).insertItem(val3).insertItem(val1);
      expectType([...list.removeItem(val1)]).toEqual([val2, val3]);
    });

    it("should throw a `TreeException<NotFoundError>` if the current instance has no an `item`", () => {
      expectType(() => list.removeItem(val1)).toThrow(TreeException);
      expectType(() => list.insertItem(val1).removeItem(val2)).toThrow(
        TreeException
      );
    });
  });

  describe(`#${list.removeAll.name}()`, () => {
    it("should return the same instance of `TreeList`", () => {
      expectType(list.removeAll()).toBe(list);
      expectType(list.insertItem(val1).removeAll()).toBe(list);
    });

    it("should remove all items", () => {
      expectType([...list.removeAll()]).toEqual([]);

      list.insertItem(val1);
      expectType([...list.removeAll()]).toEqual([]);

      list.insertItem(val1).insertItem(val2);
      expectType([...list.removeAll()]).toEqual([]);

      list.insertItem(val1).insertItem(val2).insertItem(val1);
      expectType([...list.removeAll()]).toEqual([]);
    });
  });

  describe(`#${list.replaceItem.name}(oldItem, newItem)`, () => {
    it("should return the same instance of `TreeList`", () => {
      expectType(list.insertItem(val1).replaceItem(val1, val2)).toBe(list);
    });

    it("should replace all occurrences of `oldItem` by `newItem`", () => {
      list.insertItem(val1).insertItem(val2).insertItem(val3);

      expectType([...list.replaceItem(val3, val2)]).toEqual([val1, val2, val2]);
      expectType([...list.replaceItem(val2, val3)]).toEqual([val1, val3, val3]);
    });

    it("should throw a `TreeException<NotFoundError>` if the current instance has no `oldItem`", () => {
      expectType(() => list.replaceItem(val1, val1)).toThrow(TreeException);
      expectType(() => list.insertItem(val1).replaceItem(val3, val2)).toThrow(
        TreeException
      );
    });
  });
});
