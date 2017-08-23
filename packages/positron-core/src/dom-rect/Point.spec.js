import { InvariableObject } from "../invariable";
import { Point } from "./Point";

const { NEGATIVE_INFINITY, POSITIVE_INFINITY } = Number;

describe("Point", () => {
    it("is an InvariableObject", () => {
        expect(InvariableObject.isImplementedBy(Point)).toBeTruthy();
    });

    describe("#constructor", () => {
        it("creates new Point with passed coordinates", () => {
            expect(new Point().valueOf()).toEqual({});
            expect(new Point({ left: void 0, top: null }).valueOf()).toEqual({});
            expect(new Point({ left: 0, top: 0 }).valueOf()).toEqual({ left: 0, top: 0 });
        });

        it("should accept Point as argument", () => {
            const point = new Point({ left: 1, top: 2 });

            expect(new Point(point).valueOf()).toEqual({ left: 1, top: 2 });
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Point({ left: "a" })).toThrow();
            expect(() => new Point({ top: NEGATIVE_INFINITY })).toThrow();
        });
    });

    describe("#moveTo", () => {
        it("creates a new Point with one or both specified coordinates", () => {
            const point = new Point({ left: 1, top: 2 });

            expect(point.moveTo({ left: 2, top: 3 })).not.toBe(point);
            expect(point.moveTo({ left: 2, top: 3 }).valueOf()).toEqual({ left: 2, top: 3 });
            expect(point.moveTo({ left: 2 }, { top: 3 }).valueOf()).toEqual({ left: 2, top: 3 });

            expect(point.moveTo({ top: 3 }).valueOf()).toEqual({ left: 1, top: 3 });
            expect(point.moveTo({ left: 2 }).valueOf()).toEqual({ left: 2, top: 2 });
        });

        it("should return current point if both coordinates were not changed", () => {
            const point = new Point({ left: 1, top: 2 });

            expect(point.moveTo({ left: 1, top: 2 })).toBe(point);
            expect(point.moveTo()).toBe(point);
            expect(point.moveTo(null)).toBe(point);
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Point().moveTo({ left: "a" })).toThrow();
            expect(() => new Point().moveTo({ top: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#moveBy", () => {
        it("creates a new Point by adding one or both specified coordinates", () => {
            const point = new Point({ left: 1, top: 2 });

            expect(point.moveBy({ left: 2, top: 3 })).not.toBe(point);
            expect(point.moveBy({ left: 2, top: 3 }).valueOf()).toEqual({ left: 3, top: 5 });
            expect(point.moveBy({ left: 2 }, { top: 3 }).valueOf()).toEqual({ left: 3, top: 5 });

            expect(point.moveBy({ top: 3 }).valueOf()).toEqual({ left: 1, top: 5 });
            expect(point.moveBy({ left: 2 }).valueOf()).toEqual({ left: 3, top: 2 });
        });

        it("should return current point if both coordinates were not changed", () => {
            const point = new Point({ left: 1, top: 2 });

            expect(point.moveBy({ left: 0, top: 0 })).toBe(point);
            expect(point.moveBy()).toBe(point);
            expect(point.moveBy(null)).toBe(point);
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Point({ left: 0 }).moveBy({ left: "a" })).toThrow();
            expect(() => new Point({ top: 0 }).moveBy({ top: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#relativeTo", () => {
        const point = new Point({ left: 1, top: 2 });

        it("creates a new point related to another point", () => {
            expect(point.relativeTo({ left: 1, top: 1 })).not.toBe(point);
            expect(point.relativeTo({ left: 1, top: 1 }).valueOf()).toEqual({ left: 0, top: 1 });
            expect(point.relativeTo({ left: 1 }, { top: 1 }).valueOf()).toEqual({ left: 0, top: 1 });
        });

        it("should return current point if both coordinates were not changed", () => {
            const point = new Point({ left: 1, top: 2 });

            expect(point.relativeTo({ left: 0, top: 0 })).toBe(point);
            expect(point.relativeTo()).toBe(point);
            expect(point.relativeTo(null)).toBe(point);
        });

        it("should throw an error if one or both coordinates is Infinity or is not a number", () => {
            expect(() => new Point({ left: 0 }).relativeTo({ left: "a" })).toThrow();
            expect(() => new Point({ top: 0 }).relativeTo({ top: POSITIVE_INFINITY })).toThrow();
        });
    });

    describe("#toStyle", () => {
        it("creates an object which can be used to assign HTML element styles", () => {
            expect(new Point().toStyle()).toEqual({ left: "auto", top: "auto" });
            expect(new Point({ left: 0, top: 0 }).toStyle()).toEqual({ left: "0px", top: "0px" });
        });
    });
});
