import { isEqual } from "./isEqual";

describe("isEqual", () => {
    it("returns true if passed objects are equal", () => {
        expect(isEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 2 })).toBeTruthy();
        expect(isEqual({ foo: 1 }, { foo: 1, bar: 2 })).toBeFalsy();
    });
});
