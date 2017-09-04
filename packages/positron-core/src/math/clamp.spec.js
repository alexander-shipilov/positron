import { clamp } from "./clamp";

const { NEGATIVE_INFINITY, POSITIVE_INFINITY } = Number;

describe("clamp", () => {
    it("clamps the specified value to the specified min and max range", () => {
        expect(clamp(1, 0, 3)).toBe(1);
        expect(clamp(1, 2, 3)).toBe(2);
        expect(clamp(4, 0, 3)).toBe(3);
        expect(clamp(NEGATIVE_INFINITY, 0, 3)).toBe(0);
        expect(clamp(POSITIVE_INFINITY, 0, 3)).toBe(3);
    });

    it("by default min = NEGATIVE_INFINITY, max = POSITIVE_INFINITY", () => {
        expect(clamp(1)).toBe(1);
        expect(clamp(NEGATIVE_INFINITY)).toBe(NEGATIVE_INFINITY);
        expect(clamp(POSITIVE_INFINITY)).toBe(POSITIVE_INFINITY);

        expect(clamp(1, 3)).toBe(3);
        expect(clamp(4, 3)).toBe(4);
        expect(clamp(NEGATIVE_INFINITY, 3)).toBe(3);
        expect(clamp(POSITIVE_INFINITY, 3)).toBe(POSITIVE_INFINITY);

        expect(clamp(1, void 0, 3)).toBe(1);
        expect(clamp(4, void 0, 3)).toBe(3);
        expect(clamp(NEGATIVE_INFINITY, void 0, 3)).toBe(NEGATIVE_INFINITY);
        expect(clamp(POSITIVE_INFINITY, void 0, 3)).toBe(3);
    });
});
