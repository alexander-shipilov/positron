import PropTypes from "prop-types";
import { Action } from "./Action";
import { Publisher } from "./Publisher";

describe("Action", () => {
    let error;

    beforeAll(() => {
        error = jest.spyOn(console, "error").mockImplementation(() => void 0);
    });

    afterAll(() => {
        error.mockReset();
        error.mockRestore();
    });

    it("should extends Publisher", () => {
        expect(Action.isImplementationOf(Publisher)).toBeTruthy();
    });

    describe("#constructor", () => {
        it("creates new Action with specified type checkers", () => {
            const action = new Action(PropTypes.string, PropTypes.number);

            expect(action).toBeInstanceOf(Action);
            expect(action.argTypes).toBeInstanceOf(Array);
            expect(action.argTypes).toEqual([PropTypes.string, PropTypes.number]);
        });
    });

    describe("#argTypes", () => {
        it("contains validators to check passed params", () => {
            const action = new Action(PropTypes.string, PropTypes.number);

            expect(action.argTypes).toEqual([PropTypes.string, PropTypes.number]);
        });
    });

    describe("#trigger", () => {
        it("should warn if passed invalid arguments", () => {
            const action = new Action(PropTypes.string.isRequired);

            action.trigger();
            expect(error).toHaveBeenCalledTimes(1);
            expect(error).toHaveBeenLastCalledWith(
                "Warning: Failed arg type: The arg `0` is marked as required in `Action`, but its value is `undefined`."
            );

            action.trigger(0);
            expect(error).toHaveBeenCalledTimes(2);
            expect(error).toHaveBeenLastCalledWith(
                "Warning: Failed arg type: Invalid arg `0` of type `number` supplied to `Action`, expected `string`."
            );
        });
    });
});
