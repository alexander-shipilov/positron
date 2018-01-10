import { arrayToObject } from "../arrayToObject";

describe("arrayToObject", () => {
    it("returns an object which keys and values are results of the passed handlers", () => {
        const toUpperCase = (value) => value.toUpperCase();

        expect(arrayToObject(["a", "b"])).toEqual({ a: "a", b: "b" });
        expect(arrayToObject(["a", "b"], toUpperCase)).toEqual({ a: "A", b: "B" });
        expect(arrayToObject(["a", "b"], void 0, toUpperCase)).toEqual({ A: "a", B: "b" });
        expect(arrayToObject(["a", "b"], toUpperCase, toUpperCase)).toEqual({ A: "A", B: "B" });
    });

    it("should skip undefined keys", () => {
        expect(arrayToObject([1, 2, 3], void 0, (value) => void 0)).toEqual({ });
    });
});
