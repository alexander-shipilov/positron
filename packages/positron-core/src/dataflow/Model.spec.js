import { InvariableObject } from "../invariable";
import { Model } from "./Model";

describe("Model", () => {
    it("implements InvariableObject", () => {
        expect(InvariableObject.isImplementedBy(Model)).toBeTruthy();
    });

    describe("#validateAll", () => {
        it("returns an array of validation errors", () => {
            expect(new Model().validateAll()).toBeInstanceOf(Array);
        });
    });

    describe("#validate", () => {
        it("returns the first validation error", () => {
            expect(new Model().validate()).toBe(void 0);
        });
    });
});
