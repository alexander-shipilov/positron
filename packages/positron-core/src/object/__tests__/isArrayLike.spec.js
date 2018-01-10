import { isArrayLike } from "../isArrayLike";

const MAX_SAFE_INTEGER = 9007199254740991;

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

    it("should return `false` if passed length greater than MAX_SAFE_INTEGER", () => {
        expect(isArrayLike({ length: MAX_SAFE_INTEGER + 1 })).toBeFalsy();
    });
});
