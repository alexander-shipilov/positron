import { InvariableObject } from "../../src/invariable/index";
import { UrlSearchParams } from "./UrlSearchParams";

describe("UrlSearchParams", () => {
    it("implements InvariableObject", () => {
        expect(InvariableObject.isImplementedBy(UrlSearchParams)).toBeTruthy();
    });

    describe(".parse", () => {
        it("returns an object with params", () => {
            const query = UrlSearchParams.parse("foo&bar=bar");

            expect(query.constructor).toBe(Object);
            expect(query).toEqual({ foo: null, bar: "bar" });
        });

        it("should convert `true` and `false` to the boolean value", () => {
            expect(UrlSearchParams.parse("foo=true&bar=false")).toEqual({ foo: true, bar: false });
        });

        it("should convert number-like values to numbers", () => {
            expect(UrlSearchParams.parse("foo=0&bar=0x10&ted=1e2")).toEqual({ foo: 0, bar: 16, ted: 100 });
        });

        it("should convert params with the same name to an array", () => {
            expect(UrlSearchParams.parse("foo=1&foo=2&foo=a&foo=true")).toEqual({ foo: [1, 2, "a", true] });
            expect(UrlSearchParams.parse("foo&foo&foo=a")).toEqual({ foo: [null, null, "a"] });
        });
    });

    describe(".stringify", () => {
        it("returns search string", () => {
            expect(UrlSearchParams.stringify({ foo: 1, bar: 2 })).toEqual("foo=1&bar=2");
        });

        it("should skip undefined values", () => {
            expect(UrlSearchParams.stringify({ foo: void 0 })).toEqual("");
        });

        it("should convert null values to empty strings", () => {
            expect(UrlSearchParams.stringify({ foo: null })).toEqual("foo");
        });

        it("should convert an array to a list of params", () => {
            expect(UrlSearchParams.stringify({ foo: [1, 2, "a", true] })).toEqual("foo=1&foo=2&foo=a&foo=true");
            expect(UrlSearchParams.stringify({ foo: new Array(2) })).toEqual("foo&foo");
        });
    });

    describe("#constructor", () => {
        it("creates new instance of UrlSearchParams", () => {
            const query = new UrlSearchParams("foo&bar=1");

            expect(query).toBeInstanceOf(UrlSearchParams);
            expect(query.valueOf()).toEqual({ foo: null, bar: 1 });
        });
    });
});
