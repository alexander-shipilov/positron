import { TreeException } from "./TreeException";
import { TreeSet } from "./TreeSet";

describe(`${TreeSet.name}`, () => {
  let set: TreeSet<object> = new TreeSet<object>();

  const val1 = {};
  const val2 = {};
  const val3 = {};

  afterEach(() => {
    set = new TreeSet<object>();
  });

  describe(`#${set.insertItem.name}(item, refItem)`, () => {
    it("should insert an `item` before a `refItem`", () => {
      expectType([...set.insertItem(val1)]).toEqual([val1]);
      expectType([...set.insertItem(val2, val1)]).toEqual([val2, val1]);
      expectType([...set.insertItem(val3, val1)]).toEqual([val2, val3, val1]);
    });

    it("should throw a `TreeException<NotFoundError>` if the current instance has no a `refItem`", () => {
      expectType(() => set.insertItem(val1, val2)).toThrow(TreeException);
    });

    it("should throw a `RangeError` if the current instance already has `item`", () => {
      expectType(() => set.insertItem(val1).insertItem(val1)).toThrow(RangeError);
    });
  });

  describe(`#${set.replaceItem.name}(newItem, oldItem)`, () => {
    it("should throw a `RangeError` if the current instance already has `newItem`", () => {
      expectType(() => set.insertItem(val1).replaceItem(val1, val1)).toThrow(
        RangeError
      );

      expectType(() =>
        set.insertItem(val1).insertItem(val2).replaceItem(val1, val2)
      ).toThrow(RangeError);
    });
  });
});
