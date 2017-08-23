import { warning } from "./warning";

describe("warning", () => {
    let spy;

    beforeAll(() => {
        spy = jest.spyOn(console, "error").mockImplementation(() => void 0);
    });

    afterAll(() => {
        spy.mockReset();
        spy.mockRestore();
    });

    it("should call console.error with formatted message", () => {
        warning("some message with args: %1", "foo");
        expect(console.error).toBeCalledWith("Warning: some message with args: foo");
    });
});
