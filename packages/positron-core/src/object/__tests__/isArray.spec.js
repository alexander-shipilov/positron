import { isArray } from "../isArray";

describe("isArray", () => {
    it("returns true if the passed value is an array", () => {
        expect(isArray([])).toBeTruthy();
        expect(isArray("")).toBeFalsy();
    });
});
