import { describe, expect, it } from "@jest/globals";

import { isObjectType } from "./is-object-type";
import { ObjectType } from "./object-type";

describe(`${isObjectType.name}(value)`, () => {
  it("should be return `true` if `value` is `ObjectType`", () => {
    expect(isObjectType(ObjectType)).toBe(true);
  });
});
