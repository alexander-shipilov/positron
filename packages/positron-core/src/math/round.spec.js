import { round } from "./round";

describe("round", () => {
    it("return smallest number less than or equal to the passed value rounded to a given tolerance", () => {
        expect(round(3.1)).toBe(3);
        expect(round(3.1, 1)).toBe(3);

        expect(round(2.9, 2)).toBe(2);
        expect(round(3, 2)).toBe(4);
        expect(round(3.6, 2)).toBe(4);

        expect(round(3.6, 0.5)).toBe(3.5);
        expect(round(3.4, 0.5)).toBe(3.5);
    });

    it("should return NaN if the passed value or tolerance is not a number", () => {
        expect(round("a", 1)).toEqual(NaN);
        expect(round(1, "a")).toEqual(NaN);
    });
});
