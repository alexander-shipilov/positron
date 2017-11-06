import { InvariableArray } from "../../src/invariable/index";
import { UrlPath } from "./UrlPath";

describe("UrlPath", () => {
    it("implements InvariableArray", () => {
        expect(InvariableArray.isImplementedBy(UrlPath));
    });

    describe("#constructor", () => {
        it("creates new url path", () => {
            expect(String(new UrlPath())).toBe("");
            expect(String(new UrlPath(""))).toBe("");

            expect(new UrlPath("path/to").valueOf()).toEqual(["path", "to"]);
            expect(new UrlPath("/path/to").valueOf()).toEqual(["", "path", "to"]);

            expect(new UrlPath("/path/to", "some", "resource/object").valueOf())
                .toEqual(["", "path", "to", "some", "resource", "object"]);
            expect(new UrlPath("/path/to/foo", "../bar").valueOf())
                .toEqual(["", "path", "to", "foo", "..", "bar"]);
        });

        it("should accept another instance of UrlPath", () => {
            expect(String(new UrlPath(new UrlPath("/path/to")))).toEqual("/path/to");
        });
    });

    describe("#normalize", () => {
        it("normalizes path", () => {
            const path = new UrlPath("/path/to/foo", "../bar");

            expect(path.normalize()).not.toBe(path);
            expect(String(path.normalize())).toEqual("/path/to/bar");

            expect(String(new UrlPath("/path/to/foo/", "../bar").normalize())).toBe("/path/to/foo/bar");
        });
    });

    describe("#toString", () => {
        it("returns normalized path", () => {
            expect(String(new UrlPath("/path/to/foo", "../bar"))).toBe("/path/to/bar");
        });
    });
});
