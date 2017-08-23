import { mapToValues } from "./mapToValues";

describe("mapToValues", () => {
    it("returns an object which values a result of calling passed handler", () => {
        expect(mapToValues(["a", "b"], (item, index) => item + String(index))).toEqual({ a: "a0", b: "b1" });
    });
});
