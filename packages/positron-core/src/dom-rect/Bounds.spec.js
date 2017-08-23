import { Bounds } from "./Bounds";
import { Rect } from "./Rect";

const { POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;

describe("Bounds", () => {
    describe("#constructor", () => {
        it("creates new bounds", () => {
            expect(new Bounds({ left: 1, top: 1, right: 1, bottom: 1 }).valueOf())
                .toEqual({ left: 1, top: 1, right: 1, bottom: 1 });
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Bounds({ right: "a" })).toThrow();
            expect(() => new Bounds({ bottom: NEGATIVE_INFINITY })).toThrow();
        });
    });

    describe("#contourIn", () => {
        it("creates new contoured Rect", () => {
            const rect = new Rect({ left: 0, top: 0, width: 100, height: 100 });

            expect(new Bounds({ top: 10, right: 10 }).contourIn(rect).valueOf())
                .toEqual({ left: 0, top: 10, width: 90, height: 90 });
            expect(new Bounds({ left: 10, top: 10, right: 10, bottom: 10 }).contourIn(rect).valueOf())
                .toEqual({ left: 10, top: 10, width: 80, height: 80 });
        });
    });

    describe("#contourOut", () => {
        it("creates new contoured Rect", () => {
            const rect = new Rect({ left: 0, top: 0, width: 100, height: 100 });

            expect(new Bounds({ top: 10, right: 10 }).contourOut(rect).valueOf())
                .toEqual({ left: 0, top: -10, width: 110, height: 110 });
            expect(new Bounds({ left: 10, top: 10, right: 10, bottom: 10 }).contourOut(rect).valueOf())
                .toEqual({ left: -10, top: -10, width: 120, height: 120 });
        });
    });

    describe("#invert", () => {
        it("creates a new Bounds with inverse sides", () => {
            const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });

            expect(bounds.invert().valueOf()).toEqual({ left: -10, top: -10, right: -10, bottom: -10 });
        });

        it("should return current bounds all sides are 0 or null", () => {
            const bounds = new Bounds({ left: 0, top: 0 });

            expect(bounds.invert()).toBe(bounds);
        });
    });

    describe("#resizeIn", () => {
        it("creates a new Bounds by subtracting passed bounds from the current one", () => {
            const bounds = new Bounds({ left: 20, top: 20, right: 20, bottom: 20 });

            expect(bounds.resizeIn({ left: 5 }).valueOf()).toEqual({ left: 25, top: 20, right: 20, bottom: 20 });
            expect(bounds.resizeIn({ top: 5 }).valueOf()).toEqual({ left: 20, top: 25, right: 20, bottom: 20 });
            expect(bounds.resizeIn({ right: 5 }).valueOf()).toEqual({ left: 20, top: 20, right: 15, bottom: 20 });
            expect(bounds.resizeIn({ bottom: 5 }).valueOf()).toEqual({ left: 20, top: 20, right: 20, bottom: 15 });

            expect(bounds.resizeIn({ left: 5, top: 5, right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 25, top: 25, right: 15, bottom: 15 });
            expect(bounds.resizeIn({ left: 5, top: 5 }, { right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 25, top: 25, right: 15, bottom: 15 });
            expect(bounds.resizeIn({ left: 5, top: 5 }).resizeIn({ right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 25, top: 25, right: 15, bottom: 15 });
        });

        it("should return current bounds if all side has not been not changed", () => {
            const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });

            expect(bounds.resizeIn()).toBe(bounds);
            expect(bounds.resizeIn(null)).toBe(bounds);
            expect(bounds.resizeIn({ left: 0, top: 0, right: 0, bottom: 0 })).toBe(bounds);
            expect(bounds.resizeIn({ left: 0, top: 0 }, { right: 0, bottom: 0 })).toBe(bounds);
            expect(bounds.resizeIn({ left: 5, top: 5 }).resizeIn({ left: -5, top: -5 })).toBe(bounds);
        });

        it("should throw an error if some of bounds is Infinity or is not a number", () => {
            expect(() => new Bounds({ right: 0 }).resizeIn({ right: "a" })).toThrow();
            expect(() => new Bounds({ bottom: 0 }).resizeIn({ bottom: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#resizeTo", () => {
        it("creates a new Bounds with one or both specified bounds", () => {
            const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });


            expect(bounds.resizeTo({ left: 5 }).valueOf()).toEqual({ left: 5, top: 10, right: 10, bottom: 10 });
            expect(bounds.resizeTo({ top: 5 }).valueOf()).toEqual({ left: 10, top: 5, right: 10, bottom: 10 });
            expect(bounds.resizeTo({ right: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 5, bottom: 10 });
            expect(bounds.resizeTo({ bottom: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 10, bottom: 5 });

            expect(bounds.resizeTo({ left: 5, top: 5, right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 5, top: 5, right: 5, bottom: 5 });
            expect(bounds.resizeTo({ left: 5, top: 5 }, { right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 5, top: 5, right: 5, bottom: 5 });
        });

        it("should return current bounds if all bounds were not changed", () => {
            const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });

            expect(bounds.resizeTo()).toBe(bounds);
            expect(bounds.resizeTo(null)).toBe(bounds);
            expect(bounds.resizeTo(bounds)).toBe(bounds);
            expect(bounds.resizeTo({ left: 10, top: 10, right: 10, bottom: 10 })).toBe(bounds);
            expect(bounds.resizeTo({ left: 10, top: 10 }, { right: 10, bottom: 10 })).toBe(bounds);
            expect(bounds.resizeTo({ left: 10, top: 10 }).resizeTo({ right: 10, bottom: 10 })).toBe(bounds);
        });

        it("should throw an error if some of bounds is Infinity or is not a number", () => {
            expect(() => new Bounds().resizeTo({ right: "a" })).toThrow();
            expect(() => new Bounds().resizeTo({ bottom: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#resizeOut", () => {
        it("creates a new Bounds by adding passed bounds to the current one", () => {
            const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });

            expect(bounds.resizeOut({ left: 5 }).valueOf()).toEqual({ left: 5, top: 10, right: 10, bottom: 10 });
            expect(bounds.resizeOut({ top: 5 }).valueOf()).toEqual({ left: 10, top: 5, right: 10, bottom: 10 });
            expect(bounds.resizeOut({ right: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 15, bottom: 10 });
            expect(bounds.resizeOut({ bottom: 5 }).valueOf()).toEqual({ left: 10, top: 10, right: 10, bottom: 15 });

            expect(bounds.resizeOut({ left: 5, top: 5, right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 5, top: 5, right: 15, bottom: 15 });
            expect(bounds.resizeOut({ left: 5, top: 5 }, { right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 5, top: 5, right: 15, bottom: 15 });
            expect(bounds.resizeOut({ left: 5, top: 5 }).resizeOut({ right: 5, bottom: 5 }).valueOf())
                .toEqual({ left: 5, top: 5, right: 15, bottom: 15 });
        });

        it("should return current bounds if all side has not been not changed", () => {
            const bounds = new Bounds({ left: 10, top: 10, right: 10, bottom: 10 });

            expect(bounds.resizeOut()).toBe(bounds);
            expect(bounds.resizeOut(null)).toBe(bounds);
            expect(bounds.resizeOut({ left: 0, top: 0, right: 0, bottom: 0 })).toBe(bounds);
            expect(bounds.resizeOut({ left: 0, top: 0 }, { right: 0, bottom: 0 })).toBe(bounds);
            expect(bounds.resizeOut({ left: 10, top: 10 }).resizeOut({ left: -10, top: -10 })).toBe(bounds);
        });

        it("should throw an error if some of bounds is Infinity or is not a number", () => {
            expect(() => new Bounds({ right: 0 }).resizeOut({ right: "a" })).toThrow();
            expect(() => new Bounds({ bottom: 0 }).resizeOut({ bottom: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#toStyle", () => {
        it("creates an object which can be used to assign HTML element styles", () => {
            expect(new Bounds().toStyle()).toEqual({ left: "auto", top: "auto", right: "auto", bottom: "auto" });
            expect(new Bounds({ left: 0, top: 0 }).toStyle())
                .toEqual({ left: "0px", top: "0px", right: "auto", bottom: "auto" });
            expect(new Bounds({ left: 0, top: 0, right: 0, bottom: 0 }).toStyle())
                .toEqual({ left: "0px", top: "0px", right: "0px", bottom: "0px" });
        });
    });

    describe(".fromRect", () => {
        it("creates a new bounds the give rect related to the another one", () => {
            const rect = new Rect({ left: 10, top: 10, width: 10, height: 10 });
            const fromRect = new Rect({ left: 5, top: 5, width: 20, height: 20 });

            expect(Bounds.fromRect(rect, fromRect)).toBeInstanceOf(Bounds);
            expect(Bounds.fromRect(rect, fromRect).valueOf()).toEqual({ left: 5, top: 5, right: 5, bottom: 5 });
        });
    });
});

