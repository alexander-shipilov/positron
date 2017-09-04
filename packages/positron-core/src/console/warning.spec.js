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

    describe("production", () => {
        let NODE_ENV;
        let spy;

        beforeAll(() => {
            NODE_ENV = process.env.NODE_ENV;
            process.env.NODE_ENV = "production";
            spy = jest.spyOn(console, "error").mockImplementation(() => void 0);
        });

        afterAll(() => {
            process.env.NODE_ENV = NODE_ENV;
            spy.mockReset();
            spy.mockRestore();
        });

        it("should do nothing on production", () => {
            warning("some message with args: %1", "foo");
            expect(console.error).not.toBeCalledWith();
        });
    });

    it("should not throw if there is no console or console has no method `error`", () => {
        const console = global.console;

        global.console = null;
        expect(() => warning("some message with args: %1", "foo")).not.toThrow();
        global.console = {};
        expect(() => warning("some message with args: %1", "foo")).not.toThrow();

        global.console = console;
    });
});
