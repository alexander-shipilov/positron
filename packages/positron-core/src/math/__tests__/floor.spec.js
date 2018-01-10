import { floor } from "../floor";

describe("floor", () => {
    it("return smallest number less than or equal to the passed value rounded to a given tolerance", () => {
        expect(floor(3.1)).toBe(3);
        expect(floor(3.1, 1)).toBe(3);
        expect(floor(3.1, 2)).toBe(2);
        expect(floor(3.6, 0.5)).toBe(3.5);
    });

    it("should return NaN if the passed value or tolerance is not a number", () => {
        expect(floor("a", 1)).toEqual(NaN);
        expect(floor(1, "a")).toEqual(NaN);
    });
});
