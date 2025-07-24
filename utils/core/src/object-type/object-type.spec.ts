import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { ObjectType } from "./object-type";
import { OBJECT_TYPE } from "./object-type";

describe("OBJECT_TYPE", () => {
  it("should be `typeof <object>`", () => {
    expect(typeof {}).toBe(OBJECT_TYPE);
  });
});

describe("ObjectType", () => {
  it("should be `typeof OBJECT_TYPE`", () => {
    expectTypeOf<ObjectType>().toEqualTypeOf<typeof OBJECT_TYPE>();
  });
});
