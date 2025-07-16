import { describe, expect, it } from "@jest/globals";
import { TreeCollectionSpec } from "../collection";
import type { TreeList } from "./types";

export class TreeListSpec {
  /**
   * @param list - Tree list
   * @param displayName - Tree list display name
   */
  static describe(list: TreeList, displayName = "treeList") {
    describe(`${displayName}: TreeList`, () => {
      TreeCollectionSpec.describe(list, displayName);

      this.describeAppend(list);
      this.describePrepend(list);
    });
  }

  /**
   * @param list - Tree list
   * @param displayName - Tree list display name
   */
  static describeAppend(list: TreeList, displayName = "treeList") {
    const item1 = {};
    const item2 = {};

    describe(`${displayName}.append(item)`, () => {
      it("should add an `item` to the end of `list`", () => {
        const items = [...list];

        list.append(item1);
        expect([...list]).toEqual([...items, item1]);

        list.append(item2);
        expect([...list]).toEqual([...items, item1, item2]);

        list.append(item1);
        expect([...list]).toEqual([...items, item1, item2, item1]);
      });

      it(`should return a reference to ${displayName}`, () => {
        expect(list.append(item1)).toBe(list);
      });
    });
  }

  /**
   * @param list - Tree list
   * @param displayName - Tree list display name
   */
  static describePrepend(list: TreeList, displayName = "treeList") {
    const item1 = {};
    const item2 = {};

    describe(`${displayName}.prepend(item)`, () => {
      it("should add an `item` to the start of `list`", () => {
        const items = [...list];

        list.prepend(item2);
        expect([...list]).toEqual([item2, ...items]);
      });

      it(`should return reference to ${displayName}`, () => {
        expect(list.prepend(item1)).toBe(list);
      });
    });
  }
}
