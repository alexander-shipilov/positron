import { isValueType } from "../isValueType";

describe("isValueType", () => {
  it("returns true if the passed value is a string, a number or a boolean", () => {
    expect(isValueType("")).toBeTruthy();
    expect(isValueType(1)).toBeTruthy();
    expect(isValueType(true)).toBeTruthy();
  });

  it("should return false if object was created with new", () => {
    expect(isValueType(new String())).toBeFalsy(); // eslint-disable-line no-new-wrappers
    expect(isValueType(new Number())).toBeFalsy(); // eslint-disable-line no-new-wrappers
    expect(isValueType(new Boolean())).toBeFalsy(); // eslint-disable-line no-new-wrappers
  });
});
