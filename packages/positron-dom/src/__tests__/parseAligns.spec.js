import { parseAligns } from "../parseAligns";

describe("parseAligns", () => {
    function expectInvalidAlignToThrow(aligns) {
        aligns.forEach((align) => {
            expect(() => parseAligns(align)).toThrow();
        });
    }

    it("parses align strings like `ll rr tb | ll rr bt`, which means:"
        + " (left to left AND right to right AND top to bottom)"
        + " OR (left to left AND right to right AND bottom to top)", () => {
        expect(parseAligns("ll rr tb | ll rr bt")).toEqual(
            [{ left: "left", right: "right", top: "bottom" }, { left: "left", right: "right", bottom: "top" }]);
    });

    it("should throw if invalid aligns passed", () => {
        expectInvalidAlignToThrow(["aa", "lh", "lv", "rh", "rv", "th", "tv", "bh", "bv"]);
    });
});
