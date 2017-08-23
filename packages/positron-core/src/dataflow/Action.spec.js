import { PropTypes } from "../prop-types";
import { Action } from "./Action";
import { Publisher } from "./Publisher";

describe("Action", () => {
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
});
