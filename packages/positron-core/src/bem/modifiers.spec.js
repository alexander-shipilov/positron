import { warning } from "../console";
import { modifiers } from "./modifiers";

jest.mock("../console/warning");

describe("modifiers", () => {
    afterEach(() => {
        warning.mockReset();
    });

    it("returns a list of classNames for passed modifiers", () => {
        expect(modifiers("foo-bar")).toBe("");
        expect(modifiers("foo-bar", { ted: true })).toBe("foo-bar_ted");
        expect(modifiers("foo-bar", { ted: "quux" })).toBe("foo-bar_ted_quux");
        expect(modifiers("foo-bar", { ted: "quux", zoo: true })).toBe("foo-bar_ted_quux foo-bar_zoo");
        expect(modifiers("foo-bar", { ted: 0 })).toBe("foo-bar_ted_0");
    });

    it("should skip modifier if the passed value is an empty string, false, null or undefined", () => {
        expect(modifiers("foo-bar", { ted: false })).toBe("");
        expect(modifiers("foo-bar", { ted: null, quux: void 0 })).toBe("");
        expect(modifiers("foo-bar", { ted: "" })).toBe("");
    });

    it("should convert both modifier name and value to the kebab case", () => {
        expect(modifiers("foo", { bazTed: "quuxZoo" })).toBe("foo_baz-ted_quux-zoo");
    });

    it("should warn if the passed name is empty", () => {
        expect(modifiers("", { "foo": true })).toBe("");
        expect(warning).toHaveBeenCalledTimes(1);
        expect(warning).toHaveBeenLastCalledWith("invalid class");

        expect(modifiers([], { "foo": true })).toBe("");
        expect(warning).toHaveBeenCalledTimes(2);
        expect(warning).toHaveBeenLastCalledWith("invalid class");
    });

    it("should warn if the passed modifier is empty", () => {
        expect(modifiers("foo", { "": true })).toBe("");
        expect(warning).toHaveBeenCalled();
        expect(warning).toHaveBeenCalledWith("invalid modifier");
    });

    it("should warn if the passed string value of modifier is empty", () => {
        expect(modifiers("foo", { "mod": " " })).toBe("");
        expect(warning).toHaveBeenCalledTimes(1);
        expect(warning).toHaveBeenLastCalledWith("invalid value");

        expect(modifiers("foo-bar", { ted: [] })).toBe("");
        expect(warning).toHaveBeenCalledTimes(2);
        expect(warning).toHaveBeenLastCalledWith("invalid value");
    });
});
