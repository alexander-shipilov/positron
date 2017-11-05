import { pick } from "./pick";

describe("pick", () => {
    it("creates an object composed of the picked object properties", () => {
        expect(pick({ foo: 1, bar: 2 }, ["foo"])).toEqual({ foo: 1 });
    });

    it("should omit undefined properties", () => {
        expect(pick({ foo: void 0 }, ["foo"])).toEqual({});
    });

    it("should not omit null properties", () => {
        expect(pick({ foo: null }, ["foo"])).toEqual({ foo: null });
    });
});
