import { ImmutableArray } from "positron-immutable";
import { isArrayLike } from "./isArrayLike";

describe("isArrayLike", () => {
    it("returns an error if the passed value is not an instance of Array or ImmutableArray", () => {
        expect(isArrayLike({ prop: [] }, "prop", "Component")).toBe(void 0);
        expect(isArrayLike({ prop: new ImmutableArray() }, "prop", "Component")).toBe(void 0);

        expect(isArrayLike({ prop: 1 }, "prop", "Component")).toBeInstanceOf(Error);
        expect(isArrayLike({ prop: 1 }, "prop", "Component").message)
            .toBe("Invalid prop `prop` supplied to `Component`. `Array` or `ImmutableArray` expected.");
    });
});
