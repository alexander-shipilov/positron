import { Base } from "./Base";
import { BaseError } from "./BaseError";

describe("BaseError", () => {
    it("implements Error and Base", () => {
        expect(BaseError.isImplementationOf(Error, Base)).toBeTruthy();
    });
});
