import { isEqualObjects } from "../isEqualObjects";

describe("isEqual", () => {
  it("returns true if passed objects are equal", () => {
    expect(isEqualObjects({ foo: 1, bar: 2 }, { foo: 1, bar: 2 })).toBeTruthy();
    expect(isEqualObjects({ foo: 1 }, { foo: 1, bar: 2 })).toBeFalsy();
  });
});
