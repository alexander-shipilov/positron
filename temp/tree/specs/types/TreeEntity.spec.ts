import { describe } from "@jest/globals";
import { expectTypeOf } from "expect-type";
import type { TreeEntity } from "src/types";

describe("TreeEntity<Entity>", () => {
  it("should be never if `Entity` is extends `undefined`", () => {
    expectTypeOf<TreeEntity<void>>().toBeNever();
    expectTypeOf<TreeEntity<undefined>>().toBeNever();
  });

  it("should be `Entity` if `Entity` is does not extends `undefined`", () => {
    expectTypeOf<TreeEntity<string>>().toEqualTypeOf<string>();
    expectTypeOf<TreeEntity<null>>().toBeNull();
    expectTypeOf<TreeEntity<unknown>>().toBeUnknown();
  });

  it("should exclude `undefined` from `Entity`", () => {
    expectTypeOf<TreeEntity<string | undefined>>().toEqualTypeOf<string>();
  });
});
