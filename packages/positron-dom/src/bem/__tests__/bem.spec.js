import { bem } from "../bem";

describe("bem", () => {
    it("applies modifiers to the specified className", () => {
        expect(bem("foo-bar")).toBe("foo-bar");
        expect(bem("foo-bar", { ted: true })).toBe("foo-bar foo-bar_ted");
        expect(bem("foo-bar", { ted: "quux" })).toBe("foo-bar foo-bar_ted_quux");
        expect(bem("foo-bar", { ted: "quux", zoo: true })).toBe("foo-bar foo-bar_ted_quux foo-bar_zoo");
    });
});
