import { Rect } from "./Rect";

const { POSITIVE_INFINITY, NEGATIVE_INFINITY } = Number;

describe("Rect", () => {
    describe("#constructor", () => {
        it("creates new rectangle", () => {
            expect(new Rect({ left: 1, top: 1, width: 1, height: 1 }).valueOf())
                .toEqual({ left: 1, top: 1, width: 1, height: 1 });
        });

        it("should convert negative size to 0", () => {
            const input = { left: 1, top: 1, width: -1, height: -1 };
            const output = { left: 1, top: 1, width: 0, height: 0 };

            expect(new Rect(input).valueOf()).toEqual(output);
            expect(new Rect(input).isEqual(new Rect(output))).toBeTruthy();
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Rect({ width: "a" })).toThrow();
            expect(() => new Rect({ height: NEGATIVE_INFINITY })).toThrow();
        });
    });

    describe("#resizeTo", () => {
        it("creates a new Rect with one or both specified coordinates", () => {
            const rect = new Rect({ width: 1, height: 2 });

            expect(rect.resizeTo({ width: 2, height: 3 })).not.toBe(rect);
            expect(rect.resizeTo({ width: 2, height: 3 }).valueOf()).toEqual({ width: 2, height: 3 });
            expect(rect.resizeTo({ width: 2 }, { height: 3 }).valueOf()).toEqual({ width: 2, height: 3 });

            expect(rect.resizeTo({ height: 3 }).valueOf()).toEqual({ width: 1, height: 3 });
            expect(rect.resizeTo({ width: 2 }).valueOf()).toEqual({ width: 2, height: 2 });
        });

        it("should return current rect if both coordinates were not changed", () => {
            const rect = new Rect({ width: 1, height: 2 });

            expect(rect.resizeTo()).toBe(rect);
            expect(rect.resizeTo(null)).toBe(rect);
            expect(rect.resizeTo(rect)).toBe(rect);
            expect(rect.resizeTo({ width: 1, height: 2 })).toBe(rect);
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Rect().resizeTo({ width: "a" })).toThrow();
            expect(() => new Rect().resizeTo({ height: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#constrain", () => {
        it("constraints a passed rect-like", () => {
            const rect = new Rect({ left: 10, top: 20, width: 100, height: 150 });

            expect(rect.constrain({ left: 0, top: 10, width: 1000, height: 1000 })).toBeInstanceOf(Rect);
            expect(rect.constrain({ left: 100 }, { top: 100 }).valueOf()).toEqual({ left: 100, top: 100 });

            expect(rect.constrain({ left: 0, top: 0 }).valueOf()).toEqual({ left: 10, top: 20 });
            expect(rect.constrain({ left: 1000, top: 1000 }).valueOf()).toEqual({ left: 110, top: 170 });
            expect(rect.constrain({ left: 50, top: 50, width: 100, height: 200 }).valueOf())
                .toEqual({ left: 50, top: 50, width: 60, height: 120 });

            expect(rect.constrain({ width: 1000 }).valueOf()).toEqual({ width: 100 });
            expect(rect.constrain({ width: 1000 }, { height: 1000 }).valueOf()).toEqual({ width: 100, height: 150 });
        });
    });

    describe("#resizeBy", () => {
        it("creates a new Rect by adding one or both specified coordinates", () => {
            const rect = new Rect({ width: 1, height: 2 });

            expect(rect.resizeBy({ height: 3 }).valueOf()).toEqual({ width: 1, height: 5 });
            expect(rect.resizeBy({ width: 2 }).valueOf()).toEqual({ width: 3, height: 2 });

            expect(rect.resizeBy({ width: 2, height: 3 })).not.toBe(rect);
            expect(rect.resizeBy({ width: 2, height: 3 }).valueOf()).toEqual({ width: 3, height: 5 });
            expect(rect.resizeBy({ width: 2 }, { height: 3 }).valueOf()).toEqual({ width: 3, height: 5 });
        });

        it("should return current rect if both coordinates were not changed", () => {
            const rect = new Rect({ width: 1, height: 2 });

            expect(rect.resizeBy()).toBe(rect);
            expect(rect.resizeBy(null)).toBe(rect);
            expect(rect.resizeBy({ width: 0, height: 0 })).toBe(rect);
            expect(rect.resizeBy({ width: 10, height: 10 }).resizeBy({ width: -10, height: -10 })).toBe(rect);
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Rect({ width: 0 }).resizeBy({ width: "a" })).toThrow();
            expect(() => new Rect({ height: 0 }).resizeBy({ height: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#toStyle", () => {
        it("creates an object which can be used to assign HTML element styles", () => {
            expect(new Rect().toStyle()).toEqual({ left: "auto", top: "auto", width: "auto", height: "auto" });
            expect(new Rect({ left: 0, top: 0 }).toStyle())
                .toEqual({ left: "0px", top: "0px", width: "auto", height: "auto" });
        });
    });
});

