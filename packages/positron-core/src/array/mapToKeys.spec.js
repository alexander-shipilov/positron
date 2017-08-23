import { mapToKeys } from "./mapToKeys";

describe("mapToKeys", () => {
    it("returns an object which kaey a result of calling passed handler", () => {
        expect(mapToKeys(["a", "b"], (item, index) => item + String(index))).toEqual({ a0: "a", b1: "b" });
    });
});
