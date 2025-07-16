import { TreeStoreMap } from "./TreeStoreMap";

describe(`${TreeStoreMap.name}`, () => {
  let storeMap: TreeStoreMap<object, number> = new TreeStoreMap<
    object,
    number
  >();

  afterEach(() => {
    storeMap = new TreeStoreMap<object, number>();
  });

  describe(`#${storeMap.get.name}(target)`, () => {
    it("should return stored props", () => {
      expectType(storeMap.get(storeMap.set({}, 1))).toEqual(1);
    });

    it("should throw an Error if collection does not contains node", () => {
      expectType(() => storeMap.get({})).toThrow(Error);
    });
  });

  describe(`#${storeMap.set.name}(target, props)`, () => {
    it("should return `target`", () => {
      const target = {};

      expectType(storeMap.set(target, 1)).toEqual(target);
    });

    it("should store props", () => {
      const target = {};

      storeMap.set(target, 1);
      expectType(storeMap.get(target)).toEqual(1);

      storeMap.set(target, 2);
      expectType(storeMap.get(target)).toEqual(2);
    });
  });
});
