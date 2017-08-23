import { isArrayLike } from "./isArrayLike";

describe("isArrayLike", () => {
    it("checks if value is array-like", () => {
        expect(isArrayLike([])).toBeTruthy();
        expect(isArrayLike({ length: 0 })).toBeTruthy();

        expect(isArrayLike("")).toBeFalsy();
        expect(isArrayLike(() => void 0)).toBeFalsy();
        expect(isArrayLike({ length: "0" })).toBeFalsy();
        expect(isArrayLike({ length: 1.1 })).toBeFalsy();
        expect(isArrayLike({ length: -1 })).toBeFalsy();
    });
});
