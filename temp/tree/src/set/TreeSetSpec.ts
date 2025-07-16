/* eslint-disable jest/no-export */

import { afterEach, describe, expect, it } from "@jest/globals";
import type { TreeMutableSet } from "./types";

export class TreeMutableSetSpec {
  static describe(create: () => TreeMutableSet<unknown>) {
    describe("TreeMutableSet", () => {
      let treeSet = create();

      afterEach(() => {
        treeSet = create();
      });

      TreeMutableSetSpec.describeIndexOf(treeSet);
    });
  }

  protected static describeIndexOf(treeSet: TreeMutableSet<unknown>) {
    describe("#indexOf(item)", () => {
      it("should return index of the passed item", () => {
        treeSet.insert(1).insert(2);

        expect(treeSet.indexOf(1)).toBe(0);
        expect(treeSet.indexOf(2)).toBe(0);
      });
    });
  }

  protected static describeInsert(treeSet: TreeMutableSet<unknown>) {
    describe(`#insert(item, refItem)`, () => {
      it("should append an `item` if `refItem` is `null`", () => {
        treeSet.insert(1);

        expect(treeSet.insert(1).item(0)).toBe(1);
      });

      it("should insert an `item` before a `refItem`", () => {
        treeSet.insert(1);

        treeSet.insert(2, 1);
        expect([...treeSet.insert(2, 1)]).toEqual([2, 1]);
        expect([...treeSet.insert(3, 1)]).toEqual([2, 3, 1]);
      });

      it("should do nothing if set already contains an `item`", () => {
        expect([...treeSet.insert(1).insert(1)]).toEqual([1]);
      });

      it("should do nothing if set does not contain an `refItem`", () => {
        expect([...treeSet.insert(1, 2)]).toEqual([]);
      });

      it("should return same object", () => {
        expect(treeSet.insert(1)).toBe(treeSet);
        expect(treeSet.insert(2)).toBe(treeSet);
        expect(treeSet.insert(3, 1)).toBe(treeSet);
      });
    });
  }
}
