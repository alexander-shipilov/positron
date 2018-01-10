import { warning } from "positron-core";
import { block } from "./block";

describe("block", () => {
    beforeEach(() => {
        warning.mockReset();
    });

    it("applies modifiers to the specified className", () => {
        expect(block("foo-bar")).toBe("foo-bar");
        expect(block("foo-bar", { ted: true })).toBe("foo-bar foo-bar_ted");
        expect(block("foo-bar", { ted: "quux" })).toBe("foo-bar foo-bar_ted_quux");
        expect(block("foo-bar", { ted: "quux", zoo: true })).toBe("foo-bar foo-bar_ted_quux foo-bar_zoo");
    });

    it("should convert blockName to the kebab case", () => {
        expect(block("fooBar")).toBe("foo-bar");
    });


    it("should warn if the passed names is invalid", () => {
        expect(block("")).toBe("");
        expect(warning).toHaveBeenCalledTimes(1);
        expect(warning).toHaveBeenLastCalledWith("invalid block");
    });
});
