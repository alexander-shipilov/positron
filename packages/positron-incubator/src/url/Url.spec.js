import { InvariableObject } from "../../src/invariable/index";
import { Url } from "./Url";

xdescribe("Url", () => {
    const urlProps = {
        protocol: "http",
        hostname: "localhost",
        port: 8800,
        pathname: "/test",
        search: "query",
        hash: "fragment"
    };

    it("extends InvariableObject", () => {
        expect(InvariableObject.isImplementedBy(Url)).toBeTruthy();
    });

    describe("#constructor", () => {
        it("creates new url", () => {
            const url = new Url(urlProps);

            expect(String(url)).toBe("http://localhost:8800/test?query#fragment");
        });

        it("should accept a string", () => {
            expect(new Url("http://localhost:8800/test?query#fragment").valueOf()).toEqual(urlProps);
        });

        it("should accept another instance of URL", () => {
            const url = new Url("http://localhost:8800/test?query#fragment");

            expect(new Url(url).valueOf()).toEqual(url.valueOf());
            expect(new Url(url).toString()).toEqual("http://localhost:8800/test?query#fragment");
        });

        it("should accept partial urls", () => {
            expect(new Url("path/to").valueOf()).toEqual({ pathname: "path/to" });
            expect(new Url("path/to?foo=1&bar").valueOf()).toEqual({ pathname: "path/to", search: "foo=1&bar" });
            expect(new Url("?foo=1&bar").valueOf()).toEqual({ search: "foo=1&bar" });
            expect(new Url("#hash").valueOf()).toEqual({ hash: "hash" });
        });
    });

    describe(".parse", () => {
        it("should return an object of url params", () => {
            const url = Url.parse("http://localhost:8800/test?query#fragment");

            expect(url).toEqual({
                protocol: "http",
                hostname: "localhost",
                port: 8800,
                pathname: "/test",
                search: "?query",
                hash: "fragment"
            });
        });
    });

    describe(".stringify", () => {
        it("converts url-like object to string", () => {
            expect(Url.stringify(urlProps)).toEqual("http://localhost:8800/test?query#fragment");
        });
    });
});
