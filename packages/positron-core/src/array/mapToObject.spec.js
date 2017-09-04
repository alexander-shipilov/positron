import { mapToObject } from "./mapToObject";

describe("mapToObject", () => {
    it("returns an object which keys and values are results of the passed handlers", () => {
        const toUpperCase = (value) => value.toUpperCase();

        expect(mapToObject(["a", "b"])).toEqual({ a: "a", b: "b" });
        expect(mapToObject(["a", "b"], toUpperCase)).toEqual({ a: "A", b: "B" });
        expect(mapToObject(["a", "b"], void 0, toUpperCase)).toEqual({ A: "a", B: "b" });
        expect(mapToObject(["a", "b"], toUpperCase, toUpperCase)).toEqual({ A: "A", B: "B" });
    });

    it("should skip undefined keys", () => {
        expect(mapToObject([1, 2, 3], void 0, (value) => void 0)).toEqual({ });
    });
});
