import { warning } from "positron-core";
import { element } from "./element";

describe("element", () => {
    beforeEach(() => {
        warning.mockReset();
    });

    it("creates an element classNames", () => {
        expect(element("foo-bar", "baz")).toBe("foo-bar__baz");
        expect(element("foo-bar", "baz", { ted: true, quux: "zoo" }))
            .toBe("foo-bar__baz foo-bar__baz_ted foo-bar__baz_quux_zoo");
    });

    it("should convert both blockName and elementName to the kebab case", () => {
        expect(element("fooBar", "bazTed")).toBe("foo-bar__baz-ted");
    });

    it("should warn if the passed names is invalid", () => {
        element("", "foo");
        expect(warning).toHaveBeenCalledTimes(1);
        expect(warning).toHaveBeenLastCalledWith("invalid block");

        element("foo", "");
        expect(warning).toHaveBeenCalledTimes(2);
        expect(warning).toHaveBeenLastCalledWith("invalid element");
    });
});
