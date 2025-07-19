import { describe, expect, it } from "@jest/globals";

import { isObjectType } from "./is-object-type";
import { OBJECT_TYPE } from "./object-type";

describe(`${isObjectType.name}(value)`, () => {
  it("should be return `true` if `value` is a `ObjectType`", () => {
    expect(isObjectType(OBJECT_TYPE)).toBe(true);
  });
});
