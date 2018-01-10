import PropTypes from "packages/positron-prop-types/src/index";
import { createPropsFilter } from "./createPropsFilter";

describe("PropFilter", () => {
    const propTypes = { foo: PropTypes.number, bar: PropTypes.number };

    it("return function which filters the passed props using the given prop types definition", () => {
        expect(createPropsFilter(propTypes)({ foo: 1, bar: 2, ted: 3 })).toEqual({ foo: 1, bar: 2 });
        expect(createPropsFilter(propTypes)({ ted: 3 })).toEqual({});
    });

    it("should pass data-* and aria-* props", () => {
        expect(createPropsFilter(propTypes)({ "data-test": 1, "aria-foo": 2 }))
            .toEqual({ "data-test": 1, "aria-foo": 2 });
    });
});
